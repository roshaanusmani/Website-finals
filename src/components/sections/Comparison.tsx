import { comparison } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WaveDivider } from "@/components/layout/WaveDivider";

export function Comparison() {
  return (
    <>
      <WaveDivider variant="light-to-dark" />
      <section className="bg-navy section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={comparison.eyebrow}
            title={comparison.title}
            titleAccent={comparison.titleAccent}
            dark
            align="center"
            className="mx-auto text-center"
          />

          <div className="mt-12 hidden overflow-hidden rounded-xl border border-white/10 md:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 font-semibold text-white/70">Self-Managing</th>
                  <th className="px-6 py-4 font-semibold text-gold">With Usmani Property Management</th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.self} className="border-b border-white/5 last:border-0">
                    <td className="px-6 py-4 text-white/60">{row.self}</td>
                    <td className="px-6 py-4 text-white">{row.usmani}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 space-y-4 md:hidden">
            {comparison.rows.map((row) => (
              <div
                key={row.self}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-xs text-white/50">Self-Managing</p>
                <p className="mt-1 text-sm text-white/70">{row.self}</p>
                <p className="mt-3 text-xs text-gold">With Usmani</p>
                <p className="mt-1 text-sm text-white">{row.usmani}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-white/80">{comparison.ctaText}</p>
            <Button href="#lead-form" variant="primary">
              {comparison.ctaButton}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
