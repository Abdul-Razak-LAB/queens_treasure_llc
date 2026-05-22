import Image from "next/image";
import Link from "next/link";

const hero = {
  title: "Authentic African Flavors.",
  highlight: "Made with Pride.",
  description:
    "Premium quality ingredients. Traditional recipes. Bold flavors that bring Africa to your table.",
  primaryCta: { label: "Shop Now", href: "/shop" },
  secondaryCta: { label: "Discover Our Story", href: "/about" }
};

const benefits = [
  { title: "All Natural", subtitle: "No Preservatives" },
  { title: "Gluten Free", subtitle: "Options" },
  { title: "Authentic", subtitle: "Recipes" },
  { title: "Quick & Easy", subtitle: "To Prepare" }
];

const highlights = [
  { title: "Quality Ingredients", text: "We use the finest natural ingredients." },
  { title: "Authentic Recipes", text: "Traditional flavors passed down through generations." },
  { title: "Made With Love", text: "Crafted in small batches with care and passion." },
  { title: "Fast & Reliable Shipping", text: "Quick delivery across the U.S." }
];

const whyChooseUs = [
  { title: "Small-Batch Made", text: "Prepared in carefully monitored batches for consistency and quality." },
  { title: "Authentic Heritage", text: "Recipes inspired by West African culinary traditions." },
  { title: "Fast U.S. Shipping", text: "Reliable delivery options across the United States." },
  { title: "Secure Checkout", text: "Protected payments and trusted order processing." }
];

const products = [
  {
    name: "Koko",
    text: "Nutritious, delicious, and ready in 5 minutes.",
    image: "/images/koko.png",
    href: "/shop/koko",
    cta: "Shop Koko"
  },
  {
    name: "Shito",
    text: "Bold, rich, and packed with authentic flavor.",
    image: "/images/shito.png",
    href: "/shop/shito",
    cta: "Shop Shito"
  },
  {
    name: "Plantain Chips",
    text: "Crispy, spicy, and absolutely irresistible.",
    image: "/images/plantain.jpeg",
    href: "/shop/plantain-chips",
    cta: "Shop Chips"
  }
];

const story = {
  eyebrow: "Our Story",
  title: "Rooted in Tradition. Made for Today.",
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
  { title: "Free Shipping", text: "On orders over $75" },
  { title: "Secure Checkout", text: "100% safe & secure" },
  { title: "Satisfaction Guaranteed", text: "Love it or we\'ll make it right" },
  { title: "Customer Support", text: "We\'re here to help" }
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[1536px] bg-[#f4efdf]">
      <section className="border-b border-[#153726] bg-[linear-gradient(115deg,#041a12,#0a2b1d)] px-4 pb-5 pt-8 text-white md:px-10 md:pt-10">
        <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div>
            <h1 className="text-5xl font-black leading-[1.02] md:text-7xl">
              {hero.title}
              <span className="mt-2 block text-brandGold">{hero.highlight}</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/90 md:text-2xl">{hero.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={hero.primaryCta.href} className="rounded-lg bg-[#d7a32b] px-6 py-3 text-base font-bold uppercase tracking-[0.06em] text-black">
                {hero.primaryCta.label}
              </Link>
              <Link href={hero.secondaryCta.href} className="rounded-lg border border-brandGold px-6 py-3 text-base font-bold uppercase tracking-[0.06em] text-brandGold">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:-mt-4 md:grid-cols-3 lg:-mt-8 xl:-mt-12">
            <div className="h-32 overflow-hidden rounded-lg border border-[#b79445]/50 bg-[#eadfca] p-1 sm:h-40 sm:p-2 md:col-span-1 md:h-80 lg:h-[28rem] xl:h-[34rem]">
              <Image src="/images/kokosingle.png" alt="Koko" width={480} height={680} className="h-full w-full object-cover object-top" />
            </div>
            <div className="h-32 overflow-hidden rounded-lg border border-[#b79445]/50 bg-[#121212] p-1 sm:h-40 sm:p-2 md:col-span-1 md:h-80 lg:h-[28rem] xl:h-[34rem]">
              <Image src="/images/shito%20single.png" alt="Shito" width={480} height={680} className="h-full w-full object-cover object-top" />
            </div>
            <div className="h-32 overflow-hidden rounded-lg border border-[#b79445]/50 bg-[#efe1bf] p-1 sm:h-40 sm:p-2 md:col-span-1 md:h-80 lg:h-[28rem] xl:h-[34rem]">
              <Image src="/images/platain%20single.png" alt="Plantain Chips" width={480} height={680} className="h-full w-full object-cover object-top" />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-brandGold/30 pt-5 md:grid-cols-4 md:gap-6">
          {benefits.map((item) => (
            <div key={item.title}>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-brandGold md:text-sm">{item.title}</p>
              <p className="text-sm text-white/85 md:text-base">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 border-b border-[#ded0af] bg-[#f7f2e4] md:grid-cols-4">
        {highlights.map((item) => (
          <article key={item.title} className="border-r border-[#e5d8ba] px-4 py-6 text-center last:border-r-0 md:px-6">
            <h2 className="text-xl font-black uppercase text-[#173725]">{item.title}</h2>
            <p className="mt-2 text-sm text-black/70 md:text-base">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="border-b border-[#dccdae] bg-[#f3ecd9] px-4 py-7 md:px-10 md:py-9">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-black text-[#173725] md:text-4xl">Why Choose Queen&apos;s Treasure</h2>
          <p className="text-sm text-black/65 md:text-base">Built on quality, trust, and authentic flavor.</p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="rounded-xl border border-[#e0d2b1] bg-[#fbf7ea] p-4">
              <h3 className="text-lg font-black text-[#173725]">{item.title}</h3>
              <p className="mt-2 text-sm text-black/70">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-8 md:px-10 md:py-10">
        <h2 className="text-center text-5xl font-black uppercase text-[#173725] md:text-6xl">Shop Our Collection</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {products.map((item) => (
            <article key={item.name} className="overflow-hidden rounded-xl border border-[#e1d4b4] bg-[#faf5e7]">
              <div className="bg-[#efe4ca] p-2">
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

      <section className="grid border-y border-[#d7c8a8] bg-[#0f2a1d] md:grid-cols-[1.05fr_1fr_0.85fr]">
        <article className="px-5 py-8 text-white md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandGold">{story.eyebrow}</p>
          <h2 className="mt-2 text-5xl font-black leading-tight md:text-6xl">{story.title}</h2>
          <p className="mt-4 text-base text-white/88 md:text-lg">{story.body}</p>
          <Link href={story.cta.href} className="mt-6 inline-flex rounded-md bg-[#d7a32b] px-6 py-3 text-sm font-bold uppercase tracking-[0.06em] text-black md:text-base">
            {story.cta.label}
          </Link>
        </article>

        <div className="relative min-h-[320px]">
          <Image src={story.image} alt="Story" fill className="object-cover" />
        </div>

        <aside className="bg-[#0a2318] px-5 py-8 text-white md:px-6 md:py-10">
          <ul className="space-y-5 text-sm md:text-base">
            <li>
              <p className="font-bold text-brandGold">African Heritage</p>
              <p className="text-white/85">Proudly inspired by traditional recipes.</p>
            </li>
            <li>
              <p className="font-bold text-brandGold">Premium Quality</p>
              <p className="text-white/85">Carefully sourced ingredients for exceptional taste.</p>
            </li>
            <li>
              <p className="font-bold text-brandGold">Community Focused</p>
              <p className="text-white/85">Supporting families and communities we love.</p>
            </li>
          </ul>
        </aside>
      </section>

      <section className="grid gap-5 border-b border-[#ded0b2] bg-[#f8f2e3] px-4 py-7 md:grid-cols-[1fr_1fr_1fr_1fr] md:px-10">
        <article>
          <h3 className="text-4xl font-black text-[#173725]">Loved by Thousands</h3>
          <p className="mt-2 text-sm text-black/70 md:text-base">4.9/5 from 1200+ happy customers</p>
        </article>

        {testimonials.map((item) => (
          <article key={item.name} className="rounded-lg bg-white/70 p-3">
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

      <section className="grid gap-4 bg-[#051d14] px-4 py-5 text-white md:grid-cols-4 md:px-10">
        {trustItems.map((item) => (
          <article key={item.title}>
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-brandGold">{item.title}</p>
            <p className="text-sm text-white/80 md:text-base">{item.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

