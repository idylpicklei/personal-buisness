import {
  ChartLine,
  Globe2,
  LucideIcon,
  ShoppingBag,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

type Pillar = {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: string;
  accent: string;
};

const pillars: Pillar[] = [
  {
    index: "01",
    title: "Performance Marketing & Partnerships",
    description:
      "We partner with top-tier global brands to drive high-converting traffic through targeted content strategies, data analytics, and SEO optimization.",
    Icon: ChartLine,
    accent: "from-indigo-500/20 to-indigo-600/5",
  },
  {
    index: "02",
    title: "Digital Content Media",
    description:
      "Building highly engaged niche communities and authority digital publications that deliver value, insights, and curated product recommendations to global audiences.",
    Icon: Globe2,
    accent: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    index: "03",
    title: "E-Commerce & Supply Chain",
    description:
      "Operating agile e-commerce brands utilizing automated, lean fulfillment models to deliver high-quality consumer goods globally.",
    Icon: ShoppingBag,
    accent: "from-violet-500/20 to-violet-600/5",
  },
];

export function PillarsSection() {
  return (
    <section id="ventures" className="relative px-6 py-28 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Diversified digital operations{" "}
            <span className="text-gradient-indigo">built for durable growth.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            DC Ventures manages a portfolio of multi-channel businesses across
            media, commerce, and strategic partnership ecosystems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map(({ title, description, Icon, index, accent }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/30 hover:shadow-[0_24px_80px_rgba(79,70,229,0.2)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="absolute -right-4 -top-4 font-mono text-7xl font-bold text-white/[0.03] transition-colors duration-300 group-hover:text-indigo-400/10">
                {index}
              </div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:border-indigo-400/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                  <Icon className="h-7 w-7 text-indigo-300" strokeWidth={1.8} />
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">{description}</p>
                <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="h-px w-6 bg-indigo-400/60" />
                  Learn more
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
