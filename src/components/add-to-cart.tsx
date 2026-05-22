"use client";

import { useState } from "react";

type Props = {
  productId: string;
  productName: string;
  variantId?: string;
  variantLabel?: string;
  priceCents: number;
};

export function AddToCartButton({ productId, productName, variantId, variantLabel, priceCents }: Props) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onAdd() {
    setLoading(true);
    setDone(false);

    await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, productName, variantId, variantLabel, quantity: 1, priceCents })
    });

    setLoading(false);
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  }

  return (
    <button type="button" onClick={onAdd} disabled={loading} className="btn-primary w-full">
      {loading ? "Adding..." : done ? "Added" : "Add to Cart"}
    </button>
  );
}
