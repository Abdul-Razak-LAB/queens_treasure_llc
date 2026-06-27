import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollToTopButton } from "@/components/scroll-to-top";

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
      <body className={`${displayFont.variable} ${bodyFont.variable} prisma-background flex min-h-screen flex-col`}>
        <SiteHeader />
        <main className="flex-1 pt-20">{children}</main>
        <SiteFooter />
        <ScrollToTopButton />
        <a
          href="https://wa.me/18606290367"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-[120] inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-[linear-gradient(135deg,#25D366,#128C7E)] text-white shadow-[0_14px_32px_rgba(18,140,126,0.45)] ring-2 ring-[#dff8eb]/55 transition-all hover:scale-105 hover:shadow-[0_18px_36px_rgba(18,140,126,0.52)] md:h-auto md:w-auto md:gap-2 md:px-4 md:py-3"
        >
          <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M19.11 17.21c-.26-.13-1.55-.77-1.79-.86-.24-.09-.41-.13-.59.13-.17.26-.67.86-.82 1.03-.15.17-.31.19-.57.06-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.3-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.46-.06-.13-.59-1.42-.81-1.95-.21-.5-.42-.43-.59-.44h-.5c-.17 0-.46.06-.7.32-.24.26-.92.9-.92 2.19s.94 2.53 1.07 2.7c.13.17 1.84 2.8 4.46 3.93.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.08 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3M16.02 5.33c-5.89 0-10.67 4.78-10.67 10.66 0 1.88.49 3.71 1.42 5.33L5.3 26.66l5.47-1.43c1.55.84 3.3 1.29 5.08 1.29h.01c5.88 0 10.66-4.78 10.66-10.66 0-2.85-1.11-5.54-3.13-7.56a10.6 10.6 0 0 0-7.37-2.97m0 19.37h-.01a8.68 8.68 0 0 1-4.43-1.22l-.32-.19-3.25.85.87-3.17-.21-.33a8.74 8.74 0 0 1-1.34-4.64c0-4.83 3.93-8.75 8.76-8.75 2.34 0 4.54.91 6.2 2.57a8.7 8.7 0 0 1 2.56 6.2c0 4.83-3.93 8.75-8.75 8.75" />
          </svg>
          <span className="hidden text-sm font-bold tracking-[0.02em] md:inline">WhatsApp</span>
        </a>
      </body>
    </html>
  );
}
