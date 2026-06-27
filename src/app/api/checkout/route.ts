import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { readCart, cartTotals, writeCart } from "@/lib/cart";
import { prisma } from "@/lib/prisma";
import { sendOrderEmail, sendOrderSms } from "@/lib/resend";

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2025-02-24.acacia" })
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "").toLowerCase();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const items = await readCart();
    if (items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const totals = cartTotals(items);

    const order = await prisma.order.create({
      data: {
        email,
        phone: body.phone ? String(body.phone) : null,
        subtotalCents: totals.subtotal,
        shippingCents: totals.shipping,
        taxCents: totals.tax,
        totalCents: totals.total,
        shippingAddress: body.shippingAddress,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            variantId: item.variantId,
            name: item.productName,
            quantity: item.quantity,
            priceCents: item.priceCents
          }))
        }
      }
    });

    let checkoutUrl: string | null = null;
    let status: "pending_payment" | "created" = stripe ? "pending_payment" : "created";

    if (stripe) {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || new URL(request.url).origin;
        const session = await stripe.checkout.sessions.create({
          mode: "payment",
          customer_email: email,
          payment_method_types: ["card"],
          line_items: items.map((item) => ({
            quantity: item.quantity,
            price_data: {
              currency: "usd",
              product_data: {
                name: item.productName,
                description: item.variantLabel
              },
              unit_amount: item.priceCents
            }
          })),
          success_url: `${baseUrl}/account?order=${order.id}`,
          cancel_url: `${baseUrl}/cart`
        });

        checkoutUrl = session.url;

        await prisma.order.update({
          where: { id: order.id },
          data: { stripeSessionId: session.id }
        });
      } catch {
        status = "created";
      }
    }

    await Promise.allSettled([
      sendOrderEmail({ to: email, orderId: order.id, totalCents: totals.total }),
      body.phone
        ? sendOrderSms({ to: String(body.phone), orderId: order.id, totalCents: totals.total })
        : Promise.resolve({ skipped: true })
    ]);

    await writeCart([]);

    return NextResponse.json({
      ok: true,
      orderId: order.id,
      checkoutUrl,
      status
    });
  } catch {
    return NextResponse.json({ error: "Checkout failed. Please try again." }, { status: 500 });
  }
}
