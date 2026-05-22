import { prisma } from "@/lib/prisma";
import { fallbackProducts } from "@/lib/products";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      where: { active: true },
      include: {
        variants: true,
        tags: true,
        ingredients: true,
        nutrition: true
      },
      orderBy: { createdAt: "asc" }
    });

    if (products.length === 0) {
      return fallbackProducts;
    }

    return products.map((p) => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      shortDescription: p.shortDescription,
      longDescription: p.longDescription,
      category: p.category,
      basePriceCents: p.basePriceCents,
      imageUrl: p.imageUrl ?? undefined,
      tags: p.tags.map((tag) => tag.tag),
      ingredients: p.ingredients.map((ingredient) => ingredient.name),
      servingSize: p.nutrition?.servingSize ?? "",
      calories: p.nutrition?.calories ?? 0,
      variants: p.variants.map((variant) => ({
        id: variant.id,
        label: variant.label,
        size: variant.size,
        priceCents: variant.priceCents,
        sku: variant.sku
      }))
    }));
  } catch {
    return fallbackProducts;
  }
}

export async function getProductBySlug(slug: string) {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) ?? null;
}

export async function getBundles() {
  try {
    return await prisma.bundle.findMany({ where: { active: true }, include: { items: { include: { product: true } } } });
  } catch {
    return [];
  }
}

export async function getApprovedReviews() {
  try {
    return await prisma.review.findMany({
      where: { approved: true },
      include: { product: true },
      orderBy: { createdAt: "desc" }
    });
  } catch {
    return [];
  }
}
