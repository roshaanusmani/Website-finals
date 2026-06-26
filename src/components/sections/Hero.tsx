import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const background = hero.background.options[hero.background.active];

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy">
      <Image
        src={background.src}
        alt={background.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/75" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4 text-gold">{hero.eyebrow}</p>
            <h1 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              {hero.title}{" "}
              <span className="text-gold">{hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#lead-form" variant="primary">
                {hero.primaryCta}
              </Button>
              <Button href="#lead-form" variant="ghost">
                {hero.secondaryCta}
              </Button>
            </div>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {hero.trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-white/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
              <p className="eyebrow mb-4">Owner Dashboard</p>
              <ul className="space-y-3">
                {hero.dashboardItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3"
                  >
                    <span className="text-sm text-white/90">{item.label}</span>
                    <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
