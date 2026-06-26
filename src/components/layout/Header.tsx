"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, primaryCta } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = scrolled || mobileOpen;

  const headerBg = isSolid
    ? "border-b border-navy/10 bg-cream/95 shadow-md backdrop-blur-md"
    : "bg-transparent";

  const navLinkClass = isSolid
    ? "text-sm font-medium text-navy/80 transition-colors hover:text-gold"
    : "text-sm font-medium text-white/90 transition-colors hover:text-gold";

  const menuButtonClass = isSolid ? "text-navy" : "text-white";

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
        <Link href="/property-management-windsor-essex" className="flex items-center">
          <Logo variant="header" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#lead-form" variant="primary">
            {primaryCta}
          </Button>
        </div>

        <button
          type="button"
          className={`rounded-md p-2 md:hidden ${menuButtonClass}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-navy/10 bg-cream px-4 py-6 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-navy/80 hover:text-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href="#lead-form"
                variant="primary"
                className="w-full"
                showArrow={false}
              >
                {primaryCta}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
