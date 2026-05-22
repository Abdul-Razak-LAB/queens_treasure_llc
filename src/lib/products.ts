import { Product } from "@/types/domain";

export const fallbackProducts: Product[] = [
  {
    id: "koko",
    slug: "koko",
    name: "Koko - 100% Millet",
    shortDescription: "African spiced hot cereal",
    longDescription:
      "Enjoy as a warm breakfast porridge or nourishing drink. Rich in flavor, warming, and nutritious.",
    category: "BREAKFAST",
    basePriceCents: 1299,
    tags: ["No Preservatives", "All Natural", "Authentic Recipe", "Ready in 5 Minutes", "Naturally Gluten-Free"],
    ingredients: ["Millet", "Ginger", "Cloves", "Black Pepper"],
    servingSize: "1/4 cup (30g)",
    calories: 100,
    variants: [
      { id: "koko-400", label: "14.10 oz", size: "400 g", priceCents: 1299, sku: "KOKO-400G" }
    ]
  },
  {
    id: "shito",
    slug: "shito",
    name: "Hot Pepper Relish (Shito)",
    shortDescription: "Traditional West African shito",
    longDescription:
      "A rich, bold, and smoky relish made with real seafood, slow cooked for unforgettable flavor.",
    category: "CONDIMENT",
    basePriceCents: 1499,
    tags: ["Small Batch Slow Cooked", "Made With Real Seafood"],
    ingredients: ["Vegetable Oil", "Onions", "Dried Fish", "Dried Shrimp", "Fresh Ginger", "Powdered Dried Chili Pepper"],
    servingSize: "1 tbsp (15g)",
    calories: 60,
    variants: [
      { id: "shito-12", label: "12 oz", size: "340 g", priceCents: 1499, sku: "SHITO-12OZ" },
      { id: "shito-16", label: "16 oz", size: "454 g", priceCents: 1899, sku: "SHITO-16OZ" }
    ]
  },
  {
    id: "plantain-chips",
    slug: "plantain-chips",
    name: "Plantain Chips - Hot Pepper",
    shortDescription: "Premium African snack",
    longDescription:
      "Crispy, bold, irresistible chips made with real plantains and African spices for perfect crunch.",
    category: "SNACK",
    basePriceCents: 699,
    tags: ["Made With Real Plantains", "No Artificial Colors", "Bold Flavor Perfect Crunch", "Gluten Free"],
    ingredients: [
      "Green Plantains",
      "Sunflower Oil",
      "Salt",
      "Cayenne Pepper",
      "Chili Pepper",
      "Onion Powder",
      "Paprika"
    ],
    servingSize: "1 oz (28g)",
    calories: 150,
    variants: [{ id: "plantain-5", label: "5 oz", size: "142 g", priceCents: 699, sku: "PLANTAIN-5OZ" }]
  }
];
