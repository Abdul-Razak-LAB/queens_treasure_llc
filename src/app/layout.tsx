import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"]
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Queens Treasure LLC",
  description: "Authentic African foods: Koko, Shito, and Plantain Chips"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} flex min-h-screen flex-col`}>
        <SiteHeader />
        <main className="flex-1 pt-20">{children}</main>
        <SiteFooter />
        <a
          href="https://wa.me/18606290367"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-[120] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-black shadow-[0_10px_25px_rgba(0,0,0,0.28)] transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 11.5a9 9 0 0 1-13.3 7.9L3 21l1.8-4.5A9 9 0 1 1 21 11.5Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
