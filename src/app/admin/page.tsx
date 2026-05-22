import Link from "next/link";

const cards = [
  { href: "/api/admin/products", title: "Product API", body: "Create and update product catalog" },
  { href: "/admin/orders", title: "Orders", body: "Track and fulfill incoming orders" },
  { href: "/admin/content", title: "Content", body: "Edit homepage sections, FAQ, and recipes" }
];

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-black">Admin Dashboard</h1>
      <p className="mt-2 text-black/70">Inventory, product, and order management.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="card p-5">
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="mt-2 text-sm text-black/70">{card.body}</p>
            <Link href={card.href} className="mt-4 inline-block font-semibold text-brandGreen">Open</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
