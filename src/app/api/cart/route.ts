import { NextRequest, NextResponse } from "next/server";
import { readCart, writeCart } from "@/lib/cart";

export async function GET() {
  const items = await readCart();
  return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const items = await readCart();

  const key = `${body.productId}:${body.variantId ?? "base"}`;
  const existingIndex = items.findIndex((item) => `${item.productId}:${item.variantId ?? "base"}` === key);

  if (existingIndex >= 0) {
    items[existingIndex].quantity += Number(body.quantity ?? 1);
  } else {
    items.push({
      productId: String(body.productId),
      productName: String(body.productName),
      variantId: body.variantId ? String(body.variantId) : undefined,
      variantLabel: body.variantLabel ? String(body.variantLabel) : undefined,
      quantity: Number(body.quantity ?? 1),
      priceCents: Number(body.priceCents)
    });
  }

  await writeCart(items);
  return NextResponse.json({ ok: true, items });
}

export async function DELETE() {
  await writeCart([]);
  return NextResponse.json({ ok: true });
}
