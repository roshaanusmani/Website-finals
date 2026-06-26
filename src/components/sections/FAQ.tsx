import { faq } from "@/lib/content";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQ() {
  return (
    <section id="faq" className="bg-cream section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow={faq.eyebrow}
          title={faq.title}
          titleAccent={faq.titleAccent}
          align="center"
          className="mx-auto text-center"
        />
        <div className="mt-10">
          <Accordion items={faq.items} />
        </div>
      </div>
    </section>
  );
}
