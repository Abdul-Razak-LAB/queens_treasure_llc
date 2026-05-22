import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart";
import { getProductBySlug } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { productJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const productImageBySlug: Record<string, string> = {
  koko: "/images/koko.png",
  shito: "/images/shito.png",
  "plantain-chips": "/images/plantain.jpeg"
};

const usageBySlug: Record<string, string[]> = {
  koko: [
    "Add 2 tablespoons of Koko powder to a bowl.",
    "Mix with a small amount of water into a smooth paste.",
    "Add boiling water while stirring until smooth and enjoy warm."
  ],
  shito: [
    "Use as a condiment with rice, yams, eggs, or grilled protein.",
    "Start with a small spoon for heat and flavor intensity.",
    "Refrigerate after opening for freshness."
  ],
  "plantain-chips": [
    "Enjoy straight from the pack as a crunchy snack.",
    "Pair with dips, salads, or sandwiches.",
    "Reseal after opening to keep chips crisp."
  ]
};

const productReviews = [
  { name: "Amaka S.", quote: "Authentic taste and amazing quality every time.", image: "/images/avatar-1.svg" },
  { name: "Kojo B.", quote: "The flavor is bold and memorable. My family loves it.", image: "/images/avatar-2.svg" },
  { name: "Jasmine R.", quote: "Fresh, delicious, and beautifully packaged.", image: "/images/avatar-3.svg" }
];

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product not found" };

  return {
    title: `${product.name} | Queens Treasure`,
    description: product.shortDescription
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  const defaultVariant = product.variants[0];
  const imageSrc = productImageBySlug[product.slug] ?? "/images/koko.png";
  const usageSteps = usageBySlug[product.slug] ?? ["Serve and enjoy."];
  const schema = productJsonLd({
    name: product.name,
    description: product.longDescription,
    price: defaultVariant?.priceCents ?? product.basePriceCents,
    slug: product.slug
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <section className="grid gap-7 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#f5ebd2] p-4 shadow-sm">
          <Image src={imageSrc} alt={product.name} width={700} height={700} className="h-[380px] w-full object-contain md:h-[520px]" />
        </div>

        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandSpice">{product.category}</p>
          <h1 className="text-4xl font-black leading-tight text-brandGreen md:text-5xl">{product.name}</h1>
          <p className="text-black/75">{product.longDescription}</p>
          <p className="text-3xl font-extrabold text-brandGreen">{formatPrice(defaultVariant?.priceCents ?? product.basePriceCents)}</p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-white/80 p-4">
              <p className="text-sm font-semibold text-brandGreen">Ingredients</p>
              <p className="mt-2 text-sm text-black/70">{product.ingredients.join(", ")}</p>
            </div>

            <div className="rounded-xl border border-black/10 bg-white/80 p-4">
              <p className="text-sm font-semibold text-brandGreen">Nutrition</p>
              <p className="mt-2 text-sm text-black/70">Serving size: {product.servingSize}</p>
              <p className="mt-1 text-sm text-black/70">Calories: {product.calories}</p>
            </div>
          </div>

          <div className="rounded-xl border border-black/10 bg-[#f9f3e5] p-4">
            <p className="text-sm font-semibold text-brandGreen">How To Use</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-black/75">
              {usageSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <AddToCartButton
            productId={product.id}
            productName={product.name}
            variantId={defaultVariant?.id}
            variantLabel={defaultVariant?.label}
            priceCents={defaultVariant?.priceCents ?? product.basePriceCents}
          />
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-black/10 bg-white/75 p-5 shadow-sm backdrop-blur md:p-6">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-3xl font-black text-brandGreen">Customer Reviews</h2>
          <p className="text-sm text-black/65">4.9/5 average rating</p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {productReviews.map((review) => (
            <article key={review.name} className="rounded-xl border border-black/10 bg-[#f8f2e3] p-4">
              <div className="flex items-start gap-3">
                <Image src={review.image} alt={review.name} width={46} height={46} className="h-11 w-11 rounded-full" />
                <div>
                  <p className="text-sm text-black/80">&quot;{review.quote}&quot;</p>
                  <p className="mt-2 text-sm font-semibold text-brandGreen">- {review.name}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
