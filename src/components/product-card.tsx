import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/domain";
import { formatPrice } from "@/lib/utils";

const productImageBySlug: Record<string, string> = {
  koko: "/images/koko.png",
  shito: "/images/shito.png",
  "plantain-chips": "/images/plantain.jpeg"
};

export function ProductCard({ product }: { product: Product }) {
  const imageSrc = productImageBySlug[product.slug] ?? "/images/koko.png";

  return (
    <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative overflow-hidden border-b border-black/10 bg-[#f3ead1] p-2">
        <Image
          src={imageSrc}
          alt={product.name}
          width={520}
          height={340}
          className="h-52 w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-[#102f21] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brandGold">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-extrabold leading-tight text-brandGreen">{product.name}</h3>
        <p className="mt-2 text-sm text-black/70">{product.shortDescription}</p>
      </div>

      <div className="flex items-center justify-between border-t border-black/10 px-5 py-4">
        <p className="text-lg font-extrabold text-brandGreen">{formatPrice(product.basePriceCents)}</p>
        <Link
          href={`/shop/${product.slug}`}
          className="rounded-full border border-brandGreen px-4 py-2 text-sm font-semibold text-brandGreen transition-colors hover:bg-brandGreen hover:text-white"
        >
          View Product
        </Link>
      </div>
    </article>
  );
}
