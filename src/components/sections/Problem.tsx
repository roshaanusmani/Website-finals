import { AlertCircle } from "lucide-react";
import { problem } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WaveDivider } from "@/components/layout/WaveDivider";

export function Problem() {
  return (
    <>
      <WaveDivider variant="dark-to-light" />
      <section className="bg-cream section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={problem.eyebrow}
            title={problem.title}
            description={`${problem.copy} ${problem.copySecondary}`}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problem.painPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-5 shadow-sm"
              >
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-charcoal/90">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <p className="mb-4 text-lg text-navy">{problem.ctaText}</p>
            <Button href="#lead-form" variant="secondary">
              {problem.ctaButton}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
