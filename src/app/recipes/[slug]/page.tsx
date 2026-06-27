import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/store";

type Props = { params: Promise<{ slug: string }> };

function getRecipeByCategory(category: string, name: string): string[] {
  if (category === "BREAKFAST") {
    return [
      `Measure 1/4 cup of ${name} into a saucepan.`,
      "Whisk in 1 cup water until smooth with no lumps.",
      "Cook on medium heat for 5-7 minutes while stirring, then serve warm."
    ];
  }

  if (category === "LUNCH") {
    return [
      `Prepare your base and warm ${name} according to package preference.`,
      "Pair with your choice of protein and vegetables.",
      "Plate and serve hot with sauce or stew for extra flavor."
    ];
  }

  if (category === "CONDIMENT") {
    return [
      `Start with 1 teaspoon of ${name} in your dish.`,
      "Mix into rice, eggs, grilled meat, or sauces while hot.",
      "Taste and add more to reach your preferred flavor intensity."
    ];
  }

  if (category === "SNACK") {
    return [
      `Open ${name} and portion into a bowl.`,
      "Pair with fruit, nuts, or a dip for a fuller snack.",
      "Store leftovers in an airtight container to keep crispness."
    ];
  }

  return [
    "Choose your favorite pairing ingredients.",
    "Combine products in portions that fit your serving size.",
    "Serve fresh and enjoy."
  ];
}

function getRecipeTips(category: string): string[] {
  if (category === "BREAKFAST") {
    return [
      "Whisk continuously while heating for a smoother texture.",
      "Use milk or plant milk for a creamier consistency.",
      "Top with fruit, nuts, or honey for added flavor."
    ];
  }

  if (category === "LUNCH") {
    return [
      "Prep vegetables first to keep cook time short.",
      "Balance your plate with protein and greens.",
      "Serve immediately for best texture and flavor."
    ];
  }

  if (category === "CONDIMENT") {
    return [
      "Add in small amounts first, then adjust to taste.",
      "Stir into warm dishes for better flavor release.",
      "Refrigerate after opening when required by label."
    ];
  }

  return [
    "Serve in small portions for sharing.",
    "Pair with dips, nuts, or fruit for variety.",
    "Reseal packs quickly to keep freshness."
  ];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Recipe not found | Queens Treasure" };
  }

  return {
    title: `${product.name} Recipe | Queens Treasure`,
    description: `Cooking tips and step-by-step recipe idea for ${product.name}.`
  };
}

export default async function RecipeDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  const imageSrc = product.imageUrl ?? "/assets/koko.jpeg";
  const steps = getRecipeByCategory(product.category, product.name);
  const tips = getRecipeTips(product.category);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-10">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandSpice">Recipe Detail</p>
        <Link href="/recipes" className="text-sm font-semibold text-brandGreen hover:text-brandSpice">
          Back to Recipes
        </Link>
      </div>

      <section className="mt-3 grid gap-6 rounded-2xl border border-black/10 bg-white/75 p-4 shadow-sm backdrop-blur md:grid-cols-[1fr_1.05fr] md:p-6">
        <div className="overflow-hidden rounded-xl border border-black/10 bg-[#efe4ca] p-2">
          <Image src={imageSrc} alt={product.name} width={700} height={520} className="h-72 w-full object-contain md:h-[340px]" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandSpice">{product.category}</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-brandGreen">{product.name} Cooking Tips</h1>
          <p className="mt-3 text-black/75">{product.shortDescription}</p>

          <h2 className="mt-5 text-xl font-black text-brandGreen">Step-by-Step</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-black/75 md:text-base">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-5 rounded-2xl border border-black/10 bg-[#f8f2e3] p-5">
        <h2 className="text-2xl font-black text-brandGreen">Chef Notes</h2>
        <ul className="mt-3 space-y-2 text-sm text-black/75 md:text-base">
          {tips.map((tip) => (
            <li key={tip} className="rounded-lg border border-[#e4d4b1] bg-white/70 px-3 py-2">
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
