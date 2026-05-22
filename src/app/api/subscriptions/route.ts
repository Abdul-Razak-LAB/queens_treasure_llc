import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  email: z.string().email(),
  productSlug: z.string().min(2),
  interval: z.string().min(2)
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { email, productSlug, interval } = parsed.data;

  const product = await prisma.product.findUnique({ where: { slug: productSlug } });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email }
  });

  const nextBillingDate = new Date();
  if (interval === "monthly") {
    nextBillingDate.setMonth(nextBillingDate.getMonth() + 1);
  } else {
    nextBillingDate.setDate(nextBillingDate.getDate() + 14);
  }

  const subscription = await prisma.subscription.create({
    data: {
      userId: user.id,
      productId: product.id,
      interval,
      nextBillingDate
    }
  });

  return NextResponse.json({ subscriptionId: subscription.id }, { status: 201 });
}
