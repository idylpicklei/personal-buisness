import { BadgeCheck, BarChart3, Search, Shield } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

const principles = [
  {
    title: "Compliance First",
    description:
      "We strictly adhere to FTC guidelines and network compliance structures to maintain absolute brand integrity.",
    Icon: BadgeCheck,
  },
  {
    title: "Data-Driven Content",
    description:
      "Every partnership leverages audience insights to place the right products in front of the right buyers naturally.",
    Icon: BarChart3,
  },
];

const pipeline = [
  { step: "01", label: "Audience Research", icon: Search },
  { step: "02", label: "Content Strategy", icon: BarChart3 },
  { step: "03", label: "Partner Integration", icon: Shield },
  { step: "04", label: "Performance Optimization", icon: BadgeCheck },
];

export function ApproachSection() {
  return (
    <section id="partnerships" className="relative px-6 py-28 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel accent="emerald">Our Approach</SectionLabel>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Partner-ready growth systems with{" "}
              <span className="text-gradient">brand integrity</span> at the center.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Our operating model is designed for transparent, white-hat digital
              growth across editorial content, search discovery, audience
              development, and commerce optimization.
            </p>

            <div className="mt-10 grid gap-5">
              {principles.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.05]"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400/0 via-emerald-400/60 to-emerald-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                      <Icon className="h-6 w-6 text-emerald-300" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{title}</h3>
                      <p className="mt-2 leading-7 text-zinc-400">{description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="gradient-border rounded-[1.75rem] p-8">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Growth Pipeline
              </span>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                White-Hat
              </span>
            </div>

            <div className="space-y-4">
              {pipeline.map(({ step, label, icon: Icon }, index) => (
                <div key={step} className="relative flex items-center gap-4">
                  {index < pipeline.length - 1 && (
                    <div className="absolute left-6 top-14 h-4 w-px bg-gradient-to-b from-indigo-400/40 to-transparent" />
                  )}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 font-mono text-xs text-indigo-300">
                    {step}
                  </div>
                  <div className="glass-panel flex flex-1 items-center justify-between rounded-xl px-5 py-4 transition-all duration-300 hover:border-indigo-400/30">
                    <span className="font-medium text-zinc-200">{label}</span>
                    <Icon className="h-4 w-4 text-zinc-500" strokeWidth={1.8} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
