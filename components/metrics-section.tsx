const metrics = [
  { value: "3M+", label: "Annual Digital Reach" },
  { value: "50+", label: "Brand Partners" },
  { value: "24/7", label: "Automated Operations" },
];

export function MetricsSection() {
  return (
    <section className="px-6 py-10 lg:px-8" aria-label="Company metrics">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.08] via-indigo-400/[0.08] to-white/[0.08] p-8 shadow-[0_24px_80px_rgba(79,70,229,0.22)] backdrop-blur sm:p-12">
        <div className="grid gap-8 text-center md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                {metric.value}
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-zinc-300">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
