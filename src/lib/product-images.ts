const ASSET_IMAGE_FILENAMES = [
  "corn banku.jpeg",
  "hot pepper beef relish.jpeg",
  "hot pepper.jpeg",
  "koko.jpeg",
  "kulikuli.jpeg",
  "nut-brown.jpeg",
  "plantain chip.jpeg",
  "plantain chips hot pepper.jpeg",
  "plantain cookies.jpeg",
  "red sorghum banku flour.jpeg",
  "suya spice.jpeg",
  "white sorghum banku flour.jpeg"
] as const;

const ALL_PRODUCT_IMAGES = ASSET_IMAGE_FILENAMES.map((fileName) => `/assets/${encodeURIComponent(fileName)}`);

const PRODUCT_IMAGE_BY_SLUG: Record<string, string> = {
  koko: "/assets/koko.jpeg",
  shito: "/assets/hot%20pepper%20beef%20relish.jpeg",
  "plantain-chips": "/assets/plantain%20chips%20hot%20pepper.jpeg"
};

export function getAllProductImages(): string[] {
  return [...ALL_PRODUCT_IMAGES];
}

export function getProductImageBySlug(slug: string): string {
  return PRODUCT_IMAGE_BY_SLUG[slug] ?? ALL_PRODUCT_IMAGES[0];
}

export function getProductImages(product: { slug: string; imageUrl?: string; imageUrls?: string[] }): string[] {
  const productImages = product.imageUrls?.length
    ? product.imageUrls
    : product.imageUrl
      ? [product.imageUrl]
      : [getProductImageBySlug(product.slug)];

  return Array.from(new Set([...productImages, ...ALL_PRODUCT_IMAGES]));
}
