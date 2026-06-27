"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/recipes", label: "Recipes" },
  { href: "/faq", label: "Faq" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNav = [{ href: "/", label: "Home" }, ...nav];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[110] border-b border-white/70 bg-white/55 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between px-4 md:px-8">
          <Link href="/" className="block" onClick={() => setIsOpen(false)} aria-label="Queen's Treasure Home">
            <Image
              src="/images/queens-logo.svg"
              alt="Queen's Treasure logo"
              width={200}
              height={70}
              className="h-10 w-auto md:h-11"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="border-b-2 border-brandGold pb-1 text-xs font-bold uppercase tracking-[0.1em] text-[#173725]">
              Home
            </Link>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="pb-1 text-xs font-bold uppercase tracking-[0.1em] text-[#173725]/85 hover:text-brandGold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-[#173725]">
            <Link href="/shop" className="hidden text-[#173725]/80 hover:text-brandGold md:block" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.65" y1="16.65" x2="22" y2="22" />
              </svg>
            </Link>
            <Link href="/account" className="text-[#173725]/80 hover:text-brandGold" aria-label="Account">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
            <Link href="/cart" className="relative text-[#173725]/80 hover:text-brandGold" aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="absolute -right-2 -top-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brandGold text-[10px] font-bold text-black">
                2
              </span>
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#173725]/25 text-[#173725]/90 hover:border-brandGold hover:text-brandGold md:hidden"
            >
              {isOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed left-0 right-0 top-20 z-[105] border-b border-white/70 bg-white/72 px-4 py-3 shadow-[0_22px_40px_rgba(14,35,26,0.14)] backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex w-full max-w-[1240px] flex-col">
            {mobileNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#173725]/15 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#173725] hover:text-brandGold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
