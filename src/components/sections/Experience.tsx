import { CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WaveDivider } from "@/components/layout/WaveDivider";

export function Experience() {
  return (
    <>
      <WaveDivider variant="dark-to-light" />
      <section className="bg-cream section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-navy/10 bg-white p-10 text-center shadow-sm">
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-2 border-gold/40">
                <div className="text-center">
                  <p className="font-serif text-6xl text-gold">{experience.stat}</p>
                  <p className="mt-1 font-serif text-2xl text-navy">{experience.statLabel}</p>
                </div>
              </div>
              <p className="eyebrow mt-6">Experience</p>
            </div>
            <div>
              <SectionHeader
                eyebrow={experience.eyebrow}
                title={experience.title}
                titleAccent={experience.titleAccent}
                description={experience.copy}
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {experience.credibilityPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-charcoal/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
