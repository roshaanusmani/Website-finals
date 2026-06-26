import { finalCta } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-cream section-padding">
      <div className="mx-auto max-w-3xl rounded-2xl border border-navy/10 bg-warm-white px-6 py-12 text-center shadow-sm sm:px-10 sm:py-14">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl lg:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-charcoal/80 sm:text-lg">
          {finalCta.copy}
        </p>
        <div className="mt-8">
          <Button href="#lead-form" variant="primary">
            {finalCta.ctaButton}
          </Button>
        </div>
        <p className="mt-4 text-sm text-charcoal/60">{finalCta.supportingLine}</p>
      </div>
    </section>
  );
}
