import {
  FileCheck,
  Users,
  Wrench,
  BarChart3,
} from "lucide-react";
import { differentiator } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WaveDivider } from "@/components/layout/WaveDivider";

const icons = [Users, BarChart3, Wrench, FileCheck];

export function Differentiator() {
  return (
    <>
      <WaveDivider variant="light-to-dark" />
      <section className="bg-navy section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={differentiator.eyebrow}
            title={differentiator.title}
            titleAccent={differentiator.titleAccent}
            description={differentiator.copy}
            dark
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiator.values.map((value, index) => {
              const Icon = icons[index] ?? Users;
              return (
                <div
                  key={value.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
                    <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
