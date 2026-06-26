import { Star } from "lucide-react";
import { proof } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WaveDivider } from "@/components/layout/WaveDivider";

export function ProofTrust() {
  return (
    <>
      <WaveDivider variant="dark-to-light" />
      <section className="bg-cream section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={proof.eyebrow}
            title={proof.title}
            titleAccent={proof.titleAccent}
            description={proof.copy}
            align="center"
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proof.placeholders.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-dashed border-navy/20 bg-white p-6 text-center"
              >
                <Star className="mx-auto h-8 w-8 text-gold/50" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-lg text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal/60">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
