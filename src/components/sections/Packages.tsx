import { Check } from "lucide-react";
import { packages } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WaveDivider } from "@/components/layout/WaveDivider";

export function Packages() {
  return (
    <>
      <WaveDivider variant="light-to-dark" />
      <section id="packages" className="bg-navy section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={packages.eyebrow}
            title={packages.title}
            titleAccent={packages.titleAccent}
            dark
            align="center"
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {packages.items.map((pkg) => (
              <article
                key={pkg.name}
                className={`flex flex-col rounded-2xl border p-6 sm:p-8 ${
                  pkg.featured
                    ? "border-gold bg-white/10 shadow-xl ring-2 ring-gold/50"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {pkg.featured && (
                  <span className="eyebrow mb-3 text-center">Most Popular</span>
                )}
                <h3 className="text-center font-serif text-2xl text-white">{pkg.name}</h3>
                <p className="mt-3 text-center text-sm text-white/70">{pkg.bestFor}</p>
                <p className="mt-4 text-center text-sm italic text-gold">{pkg.copy}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="#lead-form"
                    variant={pkg.featured ? "primary" : "ghost"}
                    className="w-full justify-center"
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
