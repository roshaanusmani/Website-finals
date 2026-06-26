import { audiences } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WaveDivider } from "@/components/layout/WaveDivider";

export function WhoThisIsFor() {
  return (
    <>
      <WaveDivider variant="dark-to-light" />
      <section className="bg-cream section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={audiences.eyebrow}
            title={audiences.title}
            titleAccent={audiences.titleAccent}
            description={audiences.copy}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.segments.map((segment) => (
              <article
                key={segment.title}
                className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-serif text-xl text-navy">{segment.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                  {segment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
