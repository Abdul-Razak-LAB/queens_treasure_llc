import Image from "next/image";
import aboutUsHero from "../../../assets/about us.png";

export const metadata = { title: "About | Queens Treasure" };

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <section className="overflow-hidden rounded-2xl border border-[#214632] shadow-xl">
        <Image
          src={aboutUsHero}
          alt="Queen's Treasure about banner"
          width={1536}
          height={864}
          priority
          className="h-auto w-full"
        />
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-[1.3fr_0.9fr]">
        <article className="rounded-2xl border border-black/10 bg-white/85 p-6 shadow-sm backdrop-blur md:p-8">
          <div className="space-y-4 text-black/80">
            <p>
              Queen&apos;s Treasure was created with a passion for sharing authentic African flavors made with love,
              quality ingredients, and homemade tradition. Based in Tacoma, Washington, we proudly create products
              inspired by West African recipes passed down through generations.
            </p>
            <p>
              From our rich and flavorful Hot Pepper Relish (Shito) to our nourishing Koko millet cereal, every
              product is carefully prepared to bring comfort, warmth, and unforgettable taste to your table.
            </p>
            <p>
              At Queen&apos;s Treasure, we believe food is more than a meal - it is culture, family, and connection.
              Our mission is to introduce authentic African flavors to homes across America while maintaining
              quality, freshness, and tradition in every package.
            </p>
            <p>
              Thank you for supporting Queen&apos;s Treasure LLC. We are honored to be part of your kitchen and your
              family&apos;s table.
            </p>
          </div>
        </article>

        <aside className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-brandGold/45 bg-[#102f21] p-3 shadow-sm">
            <div className="grid grid-cols-3 gap-2">
              <Image
                src="/assets/koko.jpeg"
                alt="Koko product"
                width={260}
                height={180}
                className="h-24 w-full rounded-lg bg-[#f0e7d0] object-contain p-1"
              />
              <Image
                src="/assets/hot%20pepper%20beef%20relish.jpeg"
                alt="Shito product"
                width={260}
                height={180}
                className="h-24 w-full rounded-lg bg-[#151515] object-contain p-1"
              />
              <Image
                src="/assets/plantain%20chips%20hot%20pepper.jpeg"
                alt="Plantain chips product"
                width={260}
                height={180}
                className="h-24 w-full rounded-lg bg-[#f0e2c0] object-contain p-1"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-brandGold/45 bg-[#102f21] p-6 text-white shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-brandGold">We Are Proud To Offer</h2>
          <ul className="mt-4 space-y-3 text-white/90">
            <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-brandGold/60 text-brandGold">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 13c0-5 4-9 11-9 0 7-3 11-9 11" /><path d="M8 20c0-3 2-6 5-8" /></svg>
              </span>
              <span>Authentic African-inspired products</span>
            </li>
            <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-brandGold/60 text-brandGold">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 12h18" /><path d="M5 12a7 7 0 0 0 14 0" /><path d="M8 19h8" /></svg>
              </span>
              <span>Small-batch preparation</span>
            </li>
            <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-brandGold/60 text-brandGold">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3v18" /><path d="M12 8c-2.5 0-4-1.7-4-4 2 0 4 1 4 4Z" /><path d="M12 12c2.5 0 4-1.7 4-4-2 0-4 1-4 4Z" /></svg>
              </span>
              <span>Premium ingredients</span>
            </li>
            <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-brandGold/60 text-brandGold">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3v6" /><path d="M12 21v-4" /><path d="M5 12h14" /><path d="m7 7 10 10" /></svg>
              </span>
              <span>Bold homemade flavor</span>
            </li>
            <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-brandGold/60 text-brandGold">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 20s-7-4-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5-7 9-7 9Z" /></svg>
              </span>
              <span>Products made with care and passion</span>
            </li>
          </ul>
          </div>
        </aside>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-black/10 bg-white/85 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandSpice">Our Purpose</p>
          <h2 className="mt-2 text-3xl font-black text-brandGreen">Our Mission</h2>
          <div className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brandGreen/30 bg-brandGreen/10 text-brandGreen">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3v18" /><path d="M12 8c-3 0-5-2-5-5 2.5 0 5 1 5 5Z" /><path d="M12 13c3 0 5-2 5-5-2.5 0-5 1-5 5Z" /></svg>
          </div>
          <p className="mt-3 text-black/80">
            To share authentic African flavors with families everywhere through high-quality foods that are
            convenient, nourishing, and rooted in tradition.
          </p>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white/85 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brandSpice">Our Direction</p>
          <h2 className="mt-2 text-3xl font-black text-brandGreen">Our Vision</h2>
          <div className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brandGreen/30 bg-brandGreen/10 text-brandGreen">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2" /><path d="M12 3v2" /><path d="M12 19v2" /></svg>
          </div>
          <p className="mt-3 text-black/80">
            To become a trusted global pantry brand that celebrates African culinary heritage while inspiring modern
            kitchens to cook, connect, and explore bold taste.
          </p>
        </article>
      </section>
    </div>
  );
}
