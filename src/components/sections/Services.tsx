import {
  UserCheck,
  Building2,
  ClipboardCheck,
  Wrench,
  Camera,
  LineChart,
  Home,
} from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

const icons = [UserCheck, Building2, ClipboardCheck, Wrench, Camera, LineChart, Home];

export function Services() {
  return (
    <section id="services" className="bg-cream section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={services.eyebrow}
          title={services.title}
          titleAccent={services.titleAccent}
        />
        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 xl:grid-cols-4">
          {services.items.map((service, index) => {
            const Icon = icons[index] ?? Building2;
            return (
              <article
                key={service.title}
                className="min-w-[260px] shrink-0 rounded-xl border border-navy/10 bg-white p-6 shadow-sm lg:min-w-0"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40">
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
