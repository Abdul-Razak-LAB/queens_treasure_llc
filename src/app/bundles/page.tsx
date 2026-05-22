import { getBundles } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export const metadata = { title: "Bundles | Queens Treasure" };

export default async function BundlesPage() {
  const bundles = await getBundles();

  return (
    <div>
      <h1 className="text-3xl font-black">Bundles</h1>
      <p className="mt-2 text-black/70">Phase 2: curated boxes and upsell bundles.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {bundles.length === 0 ? <p className="text-sm">No bundles configured yet.</p> : null}
        {bundles.map((bundle) => (
          <article key={bundle.id} className="card p-5">
            <h2 className="text-xl font-bold">{bundle.name}</h2>
            <p className="mt-2 text-sm text-black/70">{bundle.description}</p>
            <p className="mt-3 font-bold text-brandGreen">{formatPrice(bundle.priceCents)}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-black/70">
              {bundle.items.map((item) => (
                <li key={item.id}>{item.quantity} x {item.product.name}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
