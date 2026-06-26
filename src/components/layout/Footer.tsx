import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { footer, primaryCta, siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-warm-white text-charcoal">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="font-serif text-2xl leading-tight text-navy sm:text-3xl">
              {footer.ctaTitle}{" "}
              <span className="text-gold">{footer.ctaTitleAccent}</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
              {footer.tagline}
            </p>
            <div className="mt-6">
              <Button href="#lead-form" variant="primary">
                {primaryCta}
              </Button>
            </div>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-charcoal/80">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-gold">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <Logo variant="footer" className="mb-6" />
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy/10 pt-8 text-xs text-charcoal/50 sm:flex-row">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold">
              Privacy Policy
            </a>
            <span aria-hidden="true" className="text-charcoal/30">
              |
            </span>
            <a href="#" className="hover:text-gold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
