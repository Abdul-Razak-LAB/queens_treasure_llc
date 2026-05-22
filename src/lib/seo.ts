export function productJsonLd(params: {
  name: string;
  description: string;
  image?: string;
  price: number;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: params.name,
    description: params.description,
    image: params.image ?? [],
    brand: {
      "@type": "Brand",
      name: "Queens Treasure"
    },
    offers: {
      "@type": "Offer",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/${params.slug}`,
      priceCurrency: "USD",
      price: (params.price / 100).toFixed(2),
      availability: "https://schema.org/InStock"
    }
  };
}

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does shipping take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most U.S. orders ship within 1-2 business days and arrive in 3-5 business days."
      }
    },
    {
      "@type": "Question",
      name: "Does Shito contain allergens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shito contains fish and shellfish."
      }
    }
  ]
};
