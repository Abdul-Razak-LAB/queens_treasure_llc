import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { toSlug } from "@/lib/utils";

const createProductSchema = z.object({
  name: z.string().min(2),
  shortDescription: z.string().min(2),
  longDescription: z.string().min(2),
  category: z.enum(["BREAKFAST", "CONDIMENT", "SNACK", "BUNDLE"]),
  basePriceCents: z.number().int().positive()
});

export async function GET() {
  const products = await prisma.product.findMany({
    include: { variants: true, inventory: true },
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json({ products });
}

export async function POST(request: NextRequest) {
  const raw = await request.json();
  const parsed = createProductSchema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;

  const product = await prisma.product.create({
    data: {
      slug: toSlug(data.name),
      name: data.name,
      shortDescription: data.shortDescription,
      longDescription: data.longDescription,
      category: data.category,
      basePriceCents: data.basePriceCents,
      variants: {
        create: {
          label: "Default",
          size: "Standard",
          sku: `SKU-${Date.now()}`,
          priceCents: data.basePriceCents,
          isDefault: true
        }
      },
      inventory: {
        create: {
          quantity: 0,
          lowStockAt: 10
        }
      }
    }
  });

  return NextResponse.json({ product }, { status: 201 });
}
