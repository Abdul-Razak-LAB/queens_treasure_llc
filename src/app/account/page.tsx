import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";

export const metadata = { title: "Account | Queens Treasure" };

export default async function AccountPage() {
  const session = await auth();

  if (!session?.user?.email) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-black">Account</h1>
        <p className="text-black/70">Sign in to view order history, addresses, and reorders.</p>
        <Link href="/account/signin" className="btn-primary">
          Sign In
        </Link>
      </div>
    );
  }

  const orders = await prisma.order.findMany({
    where: { email: session.user.email },
    orderBy: { createdAt: "desc" },
    include: { items: true },
    take: 20
  });

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-black">Account</h1>
      <div className="card p-5">
        <h2 className="text-lg font-bold">Order History</h2>
        <div className="mt-3 space-y-3">
          {orders.length === 0 ? <p className="text-sm text-black/70">No orders yet.</p> : null}
          {orders.map((order) => (
            <article key={order.id} className="rounded-xl border p-3">
              <p className="font-semibold">Order #{order.id.slice(0, 10)}</p>
              <p className="text-sm text-black/70">Status: {order.status}</p>
              <p className="text-sm font-semibold text-brandGreen">{formatPrice(order.totalCents)}</p>
              <p className="mt-1 text-xs text-black/60">Items: {order.items.reduce((sum, i) => sum + i.quantity, 0)}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="card p-5">
        <h2 className="text-lg font-bold">Saved Addresses</h2>
        <p className="mt-2 text-sm text-black/70">Address management is supported via the User and Address models in Neon.</p>
      </div>
    </div>
  );
}
