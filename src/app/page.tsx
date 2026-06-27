import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/hero-carousel";
import { fallbackProducts } from "@/lib/products";

const benefits = [
  { title: "All Natural", subtitle: "No Preservatives", sign: "🌿" },
  { title: "Gluten Free", subtitle: "Options", sign: "🌾" },
  { title: "Authentic", subtitle: "Recipes", sign: "🏺" },
  { title: "Quick & Easy", subtitle: "To Prepare", sign: "⚡" }
];

const highlights = [
  { title: "Quality Ingredients", text: "We use the finest natural ingredients.", symbol: "🌿" },
  { title: "Authentic Recipes", text: "Traditional flavors passed down through generations.", symbol: "📜" },
  { title: "Made With Love", text: "Crafted in small batches with care and passion.", symbol: "💛" },
  { title: "Fast & Reliable Shipping", text: "Quick delivery across the U.S.", symbol: "🚚" }
];

const whyChooseUs = [
  { title: "Small-Batch Made", text: "Prepared in carefully monitored batches for consistency and quality." },
  { title: "Authentic Heritage", text: "Recipes inspired by West African culinary traditions." },
  { title: "Fast U.S. Shipping", text: "Reliable delivery options across the United States." },
  { title: "Secure Checkout", text: "Protected payments and trusted order processing." }
];

const products = fallbackProducts.slice(0, 12).map((product) => ({
  name: product.name,
  text: product.shortDescription,
  image: product.imageUrl ?? "/assets/koko.jpeg",
  href: `/shop/${product.slug}`,
  cta: "View Product"
}));

const story = {
  eyebrow: "Our Story",
  title: "Crafted from Heritage. Loved Every Day.",
  body:
    "Queens Treasure was born from a passion for sharing rich, authentic flavors of Africa. Every product we create is a celebration of culture, quality, and community.",
  cta: { label: "Learn More About Us", href: "/about" },
  image: "/images/story-woman.svg"
};

const testimonials = [
  { quote: "The Koko tastes just like my grandma used to make!", name: "Amaka S.", image: "/images/avatar-1.svg" },
  { quote: "Shito takes every meal to another level.", name: "Kojo B.", image: "/images/avatar-2.svg" },
  { quote: "The perfect snack! So crunchy and flavorful.", name: "Jasmine R.", image: "/images/avatar-3.svg" }
];

const trustItems = [
  { title: "Free Shipping", text: "On orders over $75", sign: "🚚" },
  { title: "Secure Checkout", text: "100% safe & secure", sign: "🔒" },
  { title: "Satisfaction Guaranteed", text: "Love it or we\'ll make it right", sign: "✅" },
  { title: "Customer Support", text: "We\'re here to help", sign: "💬" }
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[1536px] bg-transparent px-2 pb-2 md:px-3 md:pb-3">
      <section className="glass-panel rounded-2xl border border-white/70 px-4 pb-5 pt-8 text-[#173725] md:px-10 md:pt-10">
        <HeroCarousel />

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#173725]/15 pt-5 md:grid-cols-4 md:gap-6">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/60 bg-white/35 px-3 py-3 backdrop-blur-sm">
              <div className="flex items-start gap-2">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/85 bg-[radial-gradient(circle_at_35%_28%,#fff7d7_0%,#f0d086_40%,#b07c1a_100%)] text-sm shadow-[0_4px_10px_rgba(129,88,20,0.25),inset_0_1px_3px_rgba(255,255,255,0.65)]">
                  {item.sign}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-brandGold md:text-sm">{item.title}</p>
                  <p className="text-sm text-[#173725]/80 md:text-base">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-4 grid grid-cols-2 rounded-2xl md:grid-cols-4">
        {highlights.map((item) => (
          <article key={item.title} className="border-r border-[#173725]/12 px-4 py-6 text-center last:border-r-0 md:px-6">
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/90 bg-[radial-gradient(circle_at_30%_25%,#fff8db_0%,#f1d389_38%,#b27e1a_100%)] text-2xl text-[#173725] shadow-[0_8px_18px_rgba(141,95,22,0.35),inset_0_2px_6px_rgba(255,255,255,0.72),inset_0_-6px_10px_rgba(112,74,8,0.25)]">
              {item.symbol}
            </span>
            <h2 className="mt-3 text-lg font-black uppercase tracking-[0.03em] text-[#173725] md:text-xl">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-black/70 md:text-base">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="glass-panel mt-4 rounded-2xl px-4 py-7 md:px-10 md:py-9">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-black text-[#173725] md:text-4xl">Why Choose Queen&apos;s Treasure</h2>
          <p className="text-sm text-black/65 md:text-base">Built on quality, trust, and authentic flavor.</p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="glass-panel-strong rounded-xl p-4">
              <h3 className="text-lg font-black text-[#173725]">{item.title}</h3>
              <p className="mt-2 text-sm text-black/70">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-4 rounded-2xl px-4 py-8 md:px-10 md:py-10">
        <h2 className="text-center text-5xl font-black uppercase text-[#173725] md:text-6xl">Shop Our Collection</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <article key={item.name} className="glass-panel-strong overflow-hidden rounded-xl">
              <div className="bg-white/40 p-2 backdrop-blur-lg">
                <Image src={item.image} alt={item.name} width={520} height={340} className="h-56 w-full object-contain" />
              </div>
              <div className="px-4 py-4 text-center">
                <h3 className="text-3xl font-black uppercase text-[#173725]">{item.name}</h3>
                <p className="mt-1 text-sm text-black/70">{item.text}</p>
                <Link href={item.href} className="mt-3 inline-flex rounded-md bg-[#102f21] px-5 py-2 text-sm font-bold uppercase tracking-[0.05em] text-white">
                  {item.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>

      </section>

      <section className="glass-panel mt-4 grid rounded-2xl md:grid-cols-[1.05fr_1fr_0.85fr]">
        <article className="px-5 py-8 text-[#173725] md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandGold">{story.eyebrow}</p>
          <h2 className="mt-2 text-5xl font-black leading-tight md:text-6xl">{story.title}</h2>
          <p className="mt-4 text-base text-[#173725]/82 md:text-lg">{story.body}</p>
          <Link href={story.cta.href} className="mt-6 inline-flex rounded-md bg-[#d7a32b] px-6 py-3 text-sm font-bold uppercase tracking-[0.06em] text-black md:text-base">
            {story.cta.label}
          </Link>
        </article>

        <div className="relative min-h-[320px]">
          <Image src={story.image} alt="Story" fill className="object-cover" />
        </div>

        <aside className="glass-panel-strong px-5 py-8 text-[#173725] md:px-6 md:py-10">
          <ul className="space-y-5 text-sm md:text-base">
            <li>
              <p className="font-bold text-brandGold">African Heritage</p>
              <p className="text-[#173725]/80">Proudly inspired by traditional recipes.</p>
            </li>
            <li>
              <p className="font-bold text-brandGold">Premium Quality</p>
              <p className="text-[#173725]/80">Carefully sourced ingredients for exceptional taste.</p>
            </li>
            <li>
              <p className="font-bold text-brandGold">Community Focused</p>
              <p className="text-[#173725]/80">Supporting families and communities we love.</p>
            </li>
          </ul>
        </aside>
      </section>

      <section className="glass-panel mt-4 grid gap-5 rounded-2xl px-4 py-7 md:grid-cols-[1fr_1fr_1fr_1fr] md:px-10">
        <article>
          <h3 className="text-4xl font-black text-[#173725]">Loved by Thousands</h3>
          <p className="mt-2 text-sm text-black/70 md:text-base">4.9/5 from 1200+ happy customers</p>
        </article>

        {testimonials.map((item) => (
          <article key={item.name} className="glass-panel-strong rounded-lg p-3">
            <div className="flex items-start gap-3">
              <Image src={item.image} alt={item.name} width={46} height={46} className="h-11 w-11 rounded-full" />
              <div>
                <p className="text-sm text-black/80 md:text-base">&quot;{item.quote}&quot;</p>
                <p className="mt-2 text-sm font-semibold text-[#173725] md:text-base">- {item.name}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="glass-panel mt-4 grid gap-4 rounded-2xl px-4 py-5 text-[#173725] md:grid-cols-4 md:px-10">
        {trustItems.map((item) => (
          <article key={item.title} className="flex items-center gap-3 rounded-xl border border-white/65 bg-white/35 px-3 py-3 backdrop-blur-sm">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/85 bg-[radial-gradient(circle_at_35%_28%,#fff7d7_0%,#f0d086_40%,#b07c1a_100%)] text-lg shadow-[0_6px_14px_rgba(129,88,20,0.3),inset_0_1px_4px_rgba(255,255,255,0.65)]">
              {item.sign}
            </span>
            <div>
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-brandGold">{item.title}</p>
            <p className="text-sm text-[#173725]/78 md:text-base">{item.text}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

