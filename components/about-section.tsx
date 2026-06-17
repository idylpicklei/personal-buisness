import { Network, ShieldCheck, Target } from "lucide-react";

const capabilities = [
  "Multi-channel acquisition strategy",
  "Authority media and editorial operations",
  "Commerce enablement and fulfillment coordination",
  "Brand-safe partner management",
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-slate-950/70 p-8 sm:p-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
              About DC Ventures
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A portfolio business built for premium digital markets.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              DC Ventures develops and manages digital properties that connect
              audiences, brands, and commerce partners through reliable
              operating systems and measurable growth practices.
            </p>
          </div>

          <div className="grid gap-4">
            {capabilities.map((capability, index) => {
              const icons = [Network, Target, ShieldCheck, Network];
              const Icon = icons[index];

              return (
                <div
                  key={capability}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-indigo-300/40 hover:bg-white/[0.07]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-300/10">
                    <Icon className="h-5 w-5 text-indigo-300" strokeWidth={1.8} />
                  </span>
                  <span className="font-medium text-zinc-200">{capability}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
