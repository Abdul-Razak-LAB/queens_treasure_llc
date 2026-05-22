export type ProductCategory = "BREAKFAST" | "CONDIMENT" | "SNACK" | "BUNDLE";

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: ProductCategory;
  basePriceCents: number;
  imageUrl?: string;
  tags: string[];
  ingredients: string[];
  servingSize: string;
  calories: number;
  variants: Array<{
    id: string;
    label: string;
    size: string;
    priceCents: number;
    sku: string;
  }>;
};

export type CartLine = {
  productId: string;
  variantId?: string;
  quantity: number;
  priceCents: number;
};

export type OrderPayload = {
  email: string;
  phone?: string;
  shippingAddress: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  items: CartLine[];
};
