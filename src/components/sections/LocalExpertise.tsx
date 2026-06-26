import { MapPin } from "lucide-react";
import { localExpertise } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WaveDivider } from "@/components/layout/WaveDivider";

export function LocalExpertise() {
  return (
    <>
      <WaveDivider variant="dark-to-light" />
      <section className="bg-cream section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={localExpertise.eyebrow}
            title={localExpertise.title}
            titleAccent={localExpertise.titleAccent}
            description={`${localExpertise.copy} ${localExpertise.copySecondary}`}
          />
          <div className="mt-10">
            <div className="mb-4 flex items-center gap-2 text-navy">
              <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
              <h3 className="font-semibold">Local Service Areas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {localExpertise.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm text-navy"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="mb-4 text-lg text-navy">{localExpertise.ctaText}</p>
            <Button href="#lead-form" variant="secondary">
              {localExpertise.ctaButton}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
