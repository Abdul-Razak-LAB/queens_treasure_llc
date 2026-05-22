import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";

export default async function AdminOrdersPage() {
  let orders: Awaited<ReturnType<typeof prisma.order.findMany>> = [];

  try {
    orders = await prisma.order.findMany({ orderBy: { createdAt: "desc" }, take: 50 });
  } catch {
    orders = [];
  }

  return (
    <div>
      <h1 className="text-2xl font-black">Orders</h1>
      <div className="mt-4 space-y-3">
        {orders.length === 0 ? <p className="text-sm text-black/70">No orders yet.</p> : null}
        {orders.map((order) => (
          <article key={order.id} className="card p-4">
            <p className="font-semibold">#{order.id.slice(0, 10)} - {order.status}</p>
            <p className="text-sm text-black/70">{order.email}</p>
            <p className="text-sm font-bold text-brandGreen">{formatPrice(order.totalCents)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
