import { cookies } from "next/headers";

export type SessionCartItem = {
  productId: string;
  productName: string;
  variantId?: string;
  variantLabel?: string;
  quantity: number;
  priceCents: number;
};

const CART_COOKIE_KEY = "qt_cart";

export async function readCart(): Promise<SessionCartItem[]> {
  const value = (await cookies()).get(CART_COOKIE_KEY)?.value;
  if (!value) return [];

  try {
    const parsed = JSON.parse(value) as SessionCartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export async function writeCart(items: SessionCartItem[]) {
  (await cookies()).set(CART_COOKIE_KEY, JSON.stringify(items), {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30
  });
}

export function cartTotals(items: SessionCartItem[]) {
  const subtotal = items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 799;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;
  return { subtotal, shipping, tax, total };
}
