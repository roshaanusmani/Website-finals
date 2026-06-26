import { process } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WaveDivider } from "@/components/layout/WaveDivider";

export function Process() {
  return (
    <>
      <WaveDivider variant="light-to-dark" />
      <section id="process" className="bg-navy section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={process.eyebrow}
            title={process.title}
            dark
            align="center"
            className="mx-auto text-center"
          />
          <ol className="mt-12 space-y-0">
            {process.steps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {index < process.steps.length - 1 && (
                  <span
                    className="absolute top-14 left-7 h-full w-px bg-gold/30"
                    aria-hidden="true"
                  />
                )}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy">
                  <span className="font-serif text-lg text-gold">{step.number}</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-serif text-xl text-white">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
