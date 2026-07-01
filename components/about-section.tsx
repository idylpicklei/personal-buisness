import { Cpu, Network, ShieldCheck, Target } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

const capabilities = [
  {
    title: "Build and launch digital properties",
    description:
      "From niche content sites to e-commerce brands — end-to-end creation and go-to-market.",
    Icon: Network,
  },
  {
    title: "Grow audiences through organic channels",
    description:
      "SEO, editorial content, and email lists that compound over time.",
    Icon: Target,
  },
  {
    title: "Operate commerce and fulfillment",
    description:
      "Lean supply chain models with automated order routing and partner integrations.",
    Icon: Cpu,
  },
  {
    title: "Maintain partner-ready compliance",
    description:
      "FTC disclosures, network guidelines, and brand-safe placement standards.",
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
                  We build digital properties — and{" "}
                  <span className="text-gradient-indigo">prove they work.</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  DC Ventures is the operating entity behind a portfolio of
                  content, commerce, and affiliate projects. We don&apos;t just
                  pitch marketing capability — we demonstrate it through
                  properties we&apos;ve built, scaled, and continue to run.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {["Operator", "Builder", "Partner-Ready"].map((tag) => (
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
