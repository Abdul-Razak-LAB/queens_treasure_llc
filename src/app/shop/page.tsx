import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/store";

export const metadata = {
  title: "Shop | Queens Treasure"
};

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <section className="overflow-hidden rounded-2xl border border-[#214632] bg-[linear-gradient(135deg,#0a281b,#123b29)] p-6 text-white shadow-xl md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandGold">Queens Treasure Market</p>
        <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Shop Authentic African Favorites</h1>
        <p className="mt-3 max-w-3xl text-white/90 md:text-lg">
          From nourishing Koko to bold Shito and crunchy Plantain Chips, discover products made with quality
          ingredients and heritage flavor.
        </p>
      </section>

      <section className="mt-7 rounded-2xl border border-black/10 bg-white/75 p-5 shadow-sm backdrop-blur md:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandSpice">Collection</p>
            <h2 className="text-3xl font-black text-brandGreen">All Products</h2>
          </div>
          <p className="text-sm font-medium text-black/70">{products.length} items available</p>
        </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </section>
    </div>
  );
}
