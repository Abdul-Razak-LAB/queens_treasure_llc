import Link from "next/link";
import { readCart, cartTotals } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";

export const metadata = { title: "Cart | Queens Treasure" };

export default async function CartPage() {
  const items = await readCart();
  const totals = cartTotals(items);

  return (
    <div>
      <h1 className="text-3xl font-black">Your Cart</h1>
      {items.length === 0 ? (
        <p className="mt-4">Your cart is empty. <Link href="/shop" className="text-brandGreen underline">Start shopping</Link>.</p>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-[2fr,1fr]">
          <div className="space-y-3">
            {items.map((item) => (
              <div key={`${item.productId}-${item.variantId ?? "base"}`} className="card flex items-center justify-between p-4">
                <div>
                  <p className="font-semibold">{item.productName}</p>
                  <p className="text-sm text-black/70">{item.variantLabel ?? "Standard"} x {item.quantity}</p>
                </div>
                <p className="font-semibold">{formatPrice(item.priceCents * item.quantity)}</p>
              </div>
            ))}
          </div>
          <aside className="card h-fit p-4">
            <h2 className="text-lg font-bold">Summary</h2>
            <div className="mt-3 space-y-2 text-sm">
              <p className="flex justify-between"><span>Subtotal</span><span>{formatPrice(totals.subtotal)}</span></p>
              <p className="flex justify-between"><span>Shipping</span><span>{formatPrice(totals.shipping)}</span></p>
              <p className="flex justify-between"><span>Tax</span><span>{formatPrice(totals.tax)}</span></p>
              <p className="flex justify-between font-bold text-base"><span>Total</span><span>{formatPrice(totals.total)}</span></p>
            </div>
            <Link href="/checkout" className="btn-primary mt-4 w-full">Proceed to Checkout</Link>
          </aside>
        </div>
      )}
    </div>
  );
}
