import { faqJsonLd } from "@/lib/seo";

const shippingFaqs = [
  {
    question: "How long does shipping take?",
    answer: "Orders usually ship in 1-2 business days and arrive in 3-5 business days in the U.S."
  },
  {
    question: "Do you offer wholesale shipping?",
    answer: "Yes. We support wholesale inquiries and can arrange shipping based on order size and destination."
  }
];

const productFaqs = [
  {
    question: "Does Shito contain allergens?",
    answer: "Yes. Shito contains fish and shellfish."
  },
  {
    question: "How should products be stored?",
    answer: "Store in a cool, dry place. Refrigerate Shito after opening."
  },
  {
    question: "Are your products gluten-free?",
    answer: "Several of our products are naturally gluten-free. Always check product labels for full dietary details."
  }
];

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <section className="rounded-2xl border border-[#214632] bg-[linear-gradient(135deg,#0a281b,#123b29)] p-6 text-white shadow-xl md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandGold">Support</p>
        <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Frequently Asked Questions</h1>
        <p className="mt-3 max-w-3xl text-white/90 md:text-lg">
          Find quick answers about shipping, product storage, allergens, and ordering from Queen&apos;s Treasure.
        </p>
      </section>

      <section className="mt-7 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-black/10 bg-white/85 p-5 shadow-sm backdrop-blur md:p-6">
          <h2 className="text-2xl font-black text-brandGreen">Shipping & Orders</h2>
          <div className="mt-4 space-y-3">
            {shippingFaqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-black/10 bg-[#f8f3e5] p-4 open:bg-white">
                <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-[#153a29]">{item.question}</summary>
                <p className="mt-2 text-sm text-black/75">{item.answer}</p>
              </details>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white/85 p-5 shadow-sm backdrop-blur md:p-6">
          <h2 className="text-2xl font-black text-brandGreen">Products & Storage</h2>
          <div className="mt-4 space-y-3">
            {productFaqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-black/10 bg-[#f8f3e5] p-4 open:bg-white">
                <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-[#153a29]">{item.question}</summary>
                <p className="mt-2 text-sm text-black/75">{item.answer}</p>
              </details>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-5 rounded-2xl border border-[#0b2a3f] bg-[#020b26] px-4 py-6 text-white shadow-lg md:px-6 md:py-10">
        <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-[#0e324a] bg-[#021a2a] p-6 md:p-10">
          <h3 className="text-center text-4xl font-black leading-tight md:text-5xl">Still have questions?</h3>
          <p className="mt-3 text-center text-lg text-white/65 md:text-2xl">Our global team is ready to help you grow.</p>

          <div className="mt-8 space-y-3 md:flex md:items-center md:justify-center md:gap-3 md:space-y-0">
            <a
              href="tel:+18606290367"
              className="flex h-16 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#0a1f34] px-6 text-xl font-bold text-white transition-colors hover:border-white/20 hover:bg-[#102842] md:min-w-[200px]"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.8A2 2 0 0 1 22 16.9Z" />
              </svg>
              <span>Call Sales</span>
            </a>

            <a
              href="mailto:queenstreasurellc3@gmail.com"
              className="flex h-16 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#0a1f34] px-6 text-xl font-bold text-white transition-colors hover:border-white/20 hover:bg-[#102842] md:min-w-[220px]"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span>Email Support</span>
            </a>

            <a
              href="https://wa.me/18606290367"
              target="_blank"
              rel="noreferrer"
              className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-[#08a66d] px-6 text-xl font-bold text-black transition-colors hover:bg-[#1abd82] md:min-w-[190px]"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 11.5a9 9 0 0 1-13.3 7.9L3 21l1.8-4.5A9 9 0 1 1 21 11.5Z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
