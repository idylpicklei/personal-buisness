import { SectionLabel } from "@/components/ui/section-label";
import { getPortfolioStats } from "@/data/projects";

export function TrackRecordSection() {
  const stats = getPortfolioStats();

  return (
    <section className="px-6 py-10 lg:px-8" aria-label="Portfolio track record">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <SectionLabel accent="emerald">Track Record</SectionLabel>
          <p className="mt-4 text-sm text-zinc-500">
            Built and operated by DC Ventures
          </p>
        </div>

        <div className="gradient-border overflow-hidden rounded-[2rem] shadow-[0_32px_100px_rgba(79,70,229,0.15)]">
          <div className="relative bg-[#0a0f1a]/80 p-8 backdrop-blur sm:p-12">
            <div className="absolute inset-0 tech-grid-full opacity-30" />
            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:px-4">
                  <div className="font-mono text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    {stat.label}
                  </div>
                  <div className="mt-2 text-xs text-zinc-500">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
