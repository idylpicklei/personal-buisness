import { Cpu, Network, ShieldCheck, Target } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

const capabilities = [
  {
    title: "Multi-channel acquisition strategy",
    description: "Paid, organic, and partner-driven traffic orchestration.",
    Icon: Network,
  },
  {
    title: "Authority media and editorial operations",
    description: "Niche publications with editorial standards and SEO depth.",
    Icon: Target,
  },
  {
    title: "Commerce enablement and fulfillment coordination",
    description: "Lean supply chain models with automated order routing.",
    Icon: Cpu,
  },
  {
    title: "Brand-safe partner management",
    description: "Compliance-first workflows for network and brand approvals.",
    Icon: ShieldCheck,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="gradient-border overflow-hidden rounded-[2rem]">
          <div className="relative bg-[#0a0f1a]/60 p-8 backdrop-blur sm:p-12">
            <div className="absolute inset-0 tech-grid-full opacity-20" />
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-600/10 blur-[80px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div>
                <SectionLabel>About DC Ventures</SectionLabel>
                <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  A portfolio business built for{" "}
                  <span className="text-gradient-indigo">premium digital markets.</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  DC Ventures develops and manages digital properties that connect
                  audiences, brands, and commerce partners through reliable
                  operating systems and measurable growth practices.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {["Venture Studio", "Digital Media", "E-Commerce"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map(({ title, description, Icon }) => (
                  <div
                    key={title}
                    className="group glass-panel rounded-2xl p-5 transition-all duration-300 hover:border-indigo-400/30 hover:bg-white/[0.06]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                      <Icon className="h-5 w-5 text-indigo-300" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
