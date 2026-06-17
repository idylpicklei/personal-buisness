import { SectionLabel } from "@/components/ui/section-label";

const metrics = [
  { value: "3M+", label: "Annual Digital Reach", detail: "Global audience footprint" },
  { value: "50+", label: "Brand Partners", detail: "Active network relationships" },
  { value: "24/7", label: "Automated Operations", detail: "Always-on infrastructure" },
];

export function MetricsSection() {
  return (
    <section className="px-6 py-10 lg:px-8" aria-label="Company metrics">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <SectionLabel accent="emerald">By The Numbers</SectionLabel>
        </div>

        <div className="gradient-border overflow-hidden rounded-[2rem] shadow-[0_32px_100px_rgba(79,70,229,0.15)]">
          <div className="relative bg-[#0a0f1a]/80 p-8 backdrop-blur sm:p-12">
            <div className="absolute inset-0 tech-grid-full opacity-30" />
            <div className="relative grid gap-8 md:grid-cols-3 md:divide-x md:divide-white/10">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center md:px-6">
                  <div className="font-mono text-5xl font-bold tracking-tight text-gradient sm:text-6xl">
                    {metric.value}
                  </div>
                  <div className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    {metric.label}
                  </div>
                  <div className="mt-2 text-xs text-zinc-500">{metric.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
