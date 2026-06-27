import { PrismaClient, ProductCategory } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  const koko = await prisma.product.create({
    data: {
      slug: "koko",
      name: "Koko - 100% Millet",
      shortDescription: "African spiced hot cereal",
      longDescription:
        "Traditional African spiced millet cereal delivering warmth, flavor, and nourishment in every bowl.",
      category: ProductCategory.BREAKFAST,
      basePriceCents: 1299,
      imageUrl: "/assets/koko.jpeg",
      tags: {
        create: [
          { tag: "No Preservatives" },
          { tag: "All Natural" },
          { tag: "Gluten-Free" }
        ]
      },
      variants: {
        create: [{ label: "14.10 oz", size: "400 g", sku: "KOKO-400G", priceCents: 1299, isDefault: true }]
      },
      ingredients: {
        create: [
          { name: "Millet" },
          { name: "Ginger" },
          { name: "Cloves" },
          { name: "Black pepper" }
        ]
      },
      nutrition: {
        create: {
          servingSize: "1/4 cup (30g)",
          calories: 100,
          factsJson: {
            protein: "3g",
            carbs: "22g",
            fat: "1.5g"
          }
        }
      },
      inventory: {
        create: { quantity: 120, lowStockAt: 15 }
      }
    }
  });

  const shito = await prisma.product.create({
    data: {
      slug: "shito",
      name: "Hot Pepper Relish (Shito)",
      shortDescription: "Traditional West African seafood blend",
      longDescription:
        "Small-batch slow cooked hot pepper relish made with onion, fish, shrimp, ginger, and chili pepper.",
      category: ProductCategory.CONDIMENT,
      basePriceCents: 1499,
      imageUrl: "/assets/hot%20pepper%20beef%20relish.jpeg",
      tags: {
        create: [{ tag: "Small Batch" }, { tag: "Made with Real Seafood" }]
      },
      variants: {
        create: [
          { label: "12 oz", size: "340 g", sku: "SHITO-12OZ", priceCents: 1499, isDefault: true },
          { label: "16 oz", size: "454 g", sku: "SHITO-16OZ", priceCents: 1899, isDefault: false }
        ]
      },
      ingredients: {
        create: [
          { name: "Vegetable oil" },
          { name: "Onions" },
          { name: "Dried fish" },
          { name: "Dried shrimp" },
          { name: "Fresh ginger" },
          { name: "Powdered dried chili pepper" }
        ]
      },
      nutrition: {
        create: {
          servingSize: "1 tbsp (15g)",
          calories: 60,
          factsJson: {
            protein: "1g",
            carbs: "1g",
            fat: "5g"
          }
        }
      },
      inventory: {
        create: { quantity: 150, lowStockAt: 20 }
      }
    }
  });

  const plantain = await prisma.product.create({
    data: {
      slug: "plantain-chips",
      name: "Plantain Chips - Hot Pepper",
      shortDescription: "Premium African snack",
      longDescription:
        "Crispy, bold hot pepper plantain chips made from selected green plantains and classic spice blend.",
      category: ProductCategory.SNACK,
      basePriceCents: 699,
      imageUrl: "/assets/plantain%20chips%20hot%20pepper.jpeg",
      tags: {
        create: [
          { tag: "Made with Real Plantains" },
          { tag: "No Artificial Colors" },
          { tag: "Gluten-Free" }
        ]
      },
      variants: {
        create: [{ label: "5 oz", size: "142 g", sku: "PLANTAIN-5OZ", priceCents: 699, isDefault: true }]
      },
      ingredients: {
        create: [
          { name: "Green plantains" },
          { name: "Sunflower oil" },
          { name: "Salt" },
          { name: "Cayenne pepper" },
          { name: "Chili pepper" },
          { name: "Onion powder" },
          { name: "Paprika" }
        ]
      },
      nutrition: {
        create: {
          servingSize: "1 oz (28g)",
          calories: 150,
          factsJson: {
            protein: "1g",
            carbs: "15g",
            fat: "9g"
          }
        }
      },
      inventory: {
        create: { quantity: 200, lowStockAt: 25 }
      }
    }
  });

  await prisma.bundle.create({
    data: {
      slug: "taste-of-queens-box",
      name: "Taste of Queens Box",
      description: "One Koko, one Shito (12 oz), and two Plantain Chips packs.",
      priceCents: 3299,
      items: {
        create: [
          { productId: koko.id, quantity: 1 },
          { productId: shito.id, quantity: 1 },
          { productId: plantain.id, quantity: 2 }
        ]
      }
    }
  });

  await prisma.contentBlock.createMany({
    data: [
      { key: "home.hero.title", title: "Hero", body: "Authentic African Flavor, Delivered" },
      { key: "home.story", title: "Story", body: "Queens Treasure crafts premium staples rooted in authentic West African recipes." }
    ]
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
