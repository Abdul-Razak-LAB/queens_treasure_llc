"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import bankuFloursBanner from "../../assets/bankuflour.png";
import thankYouBanner from "../../assets/thank you smack.png";

const AUTOPLAY_MS = 7000;

const slides = [
  {
    src: thankYouBanner,
    alt: "Thank you for choosing Queens Treasure banner"
  },
  {
    src: bankuFloursBanner,
    alt: "Authentic Ghanaian banku flours banner"
  }
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(intervalId);
  }, []);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#ad8945]/40 bg-[#0f2a1d] shadow-2xl">
      <div className="relative aspect-[2048/1170] w-full bg-[#102f21]">
        {slides.map((slide, index) => (
          <div
            key={slide.alt}
            className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              unoptimized
              className="object-contain"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={showPrevious}
        aria-label="Previous hero slide"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/60 bg-black/35 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur hover:bg-black/55"
      >
        Prev
      </button>

      <button
        type="button"
        onClick={showNext}
        aria-label="Next hero slide"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/60 bg-black/35 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur hover:bg-black/55"
      >
        Next
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.alt}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to hero slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
              index === activeIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
