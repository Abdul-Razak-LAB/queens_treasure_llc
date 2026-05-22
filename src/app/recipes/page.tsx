import Image from "next/image";
import Link from "next/link";

const recipes = [
  {
    title: "Classic Koko Breakfast Bowl",
    body: "Cook Koko with warm water and sweeten lightly. Top with fruit and nuts.",
    time: "10 mins",
    image: "/images/koko.png",
    tag: "Breakfast"
  },
  {
    title: "Shito Rice Bowl",
    body: "Add a spoonful of Shito to rice, eggs, and avocado for a savory kick.",
    time: "15 mins",
    image: "/images/shito.png",
    tag: "Lunch"
  },
  {
    title: "Plantain Chips Party Mix",
    body: "Mix chips with roasted peanuts and dried mango for a spicy-sweet snack.",
    time: "8 mins",
    image: "/images/plantain.jpeg",
    tag: "Snack"
  }
];

const tips = [
  "Start with small portions of Shito and adjust to your preferred heat.",
  "For extra creamy Koko, whisk continuously while adding hot water.",
  "Serve Plantain Chips with dips or salad toppings for texture and crunch.",
  "Store opened products properly to preserve flavor and freshness."
];

export const metadata = { title: "Recipes | Queens Treasure" };

export default function RecipesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <section className="rounded-2xl border border-[#214632] bg-[linear-gradient(130deg,#0a281b,#123b29)] p-6 text-white shadow-xl md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandGold">Kitchen Inspiration</p>
        <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Recipes Made With Queen&apos;s Treasure</h1>
        <p className="mt-3 max-w-3xl text-white/90 md:text-lg">
          Discover simple, flavorful ways to enjoy Koko, Shito, and Plantain Chips from breakfast to dinner.
        </p>
      </section>

      <section className="mt-7 rounded-2xl border border-black/10 bg-white/75 p-5 shadow-sm backdrop-blur md:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-black text-brandGreen">Featured Recipes</h2>
          <p className="text-sm text-black/65">Easy steps. Bold flavor. Everyday meals.</p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {recipes.map((recipe) => (
            <article key={recipe.title} className="overflow-hidden rounded-xl border border-black/10 bg-[#faf5e7]">
              <div className="relative border-b border-black/10 bg-[#efe4ca] p-2">
                <Image src={recipe.image} alt={recipe.title} width={520} height={340} className="h-52 w-full object-contain" />
                <span className="absolute left-4 top-4 rounded-full bg-[#102f21] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brandGold">
                  {recipe.tag}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-black text-[#173725]">{recipe.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-brandSpice">{recipe.time}</span>
                </div>
                <p className="mt-2 text-sm text-black/70">{recipe.body}</p>
                <Link href="/contact" className="mt-3 inline-flex text-sm font-semibold text-brandGreen hover:text-brandSpice">
                  Get Cooking Tips
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-5 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm md:p-6">
          <h2 className="text-3xl font-black text-brandGreen">Home Cooking Tips</h2>
          <ul className="mt-4 space-y-3 text-sm text-black/75 md:text-base">
            {tips.map((tip) => (
              <li key={tip} className="rounded-lg border border-[#e6d9bc] bg-[#f8f2e3] px-4 py-3">
                {tip}
              </li>
            ))}
          </ul>
        </article>

        <aside className="rounded-2xl border border-brandGold/45 bg-[#102f21] p-5 text-white shadow-sm md:p-6">
          <h3 className="text-2xl font-black text-brandGold">Need a Recipe Suggestion?</h3>
          <p className="mt-3 text-white/90">
            Tell us what you are cooking and we will suggest easy meal ideas using Queen&apos;s Treasure products.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-md bg-[#d7a32b] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.06em] text-black"
          >
            Contact Us
          </Link>
        </aside>
      </section>
    </div>
  );
}
