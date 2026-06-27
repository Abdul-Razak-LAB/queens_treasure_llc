import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/70 bg-white/58 text-[#173725] backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1240px] px-4 py-10 md:px-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <section>
            <Image
              src="/images/queens-logo.svg"
              alt="Queen's Treasure logo"
              width={210}
              height={74}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-[#173725]/72">
              Premium pantry essentials rooted in tradition, crafted with care, and made for modern kitchens.
            </p>
          </section>

          <section>
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-brandGold">
              <span aria-hidden="true">🔗</span>
              <span>Quick Links</span>
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[#173725]/86">
              <li><Link href="/" className="hover:text-brandGold">Home</Link></li>
              <li><Link href="/shop" className="hover:text-brandGold">Shop</Link></li>
              <li><Link href="/about" className="hover:text-brandGold">About</Link></li>
              <li><Link href="/faq" className="hover:text-brandGold">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-brandGold">Contact</Link></li>
            </ul>
          </section>

          <section>
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-brandGold">
              <span aria-hidden="true">⚖️</span>
              <span>Legal</span>
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[#173725]/86">
              <li><Link href="/legal/privacy" className="hover:text-brandGold">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-brandGold">Terms & Conditions</Link></li>
              <li><Link href="/legal/refund" className="hover:text-brandGold">Refund Policy</Link></li>
              <li><Link href="/legal/shipping" className="hover:text-brandGold">Shipping Policy</Link></li>
            </ul>
          </section>

          <section>
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-brandGold">
              <span aria-hidden="true">☎️</span>
              <span>Contact</span>
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[#173725]/86">
              <li>Queen&apos;s Treasure LLC</li>
              <li>Tacoma, Washington, USA</li>
              <li>
                <a href="mailto:queenstreasurellc3@gmail.com" className="hover:text-brandGold">queenstreasurellc3@gmail.com</a>
              </li>
              <li>
                <a href="tel:+18606290367" className="hover:text-brandGold">(860) 629-0367</a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-8 border-t border-[#173725]/12 pt-4 text-xs text-[#173725]/62 md:flex md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Queen&apos;s Treasure LLC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with care and passion.</p>
        </div>
      </div>
    </footer>
  );
}
