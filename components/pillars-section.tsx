import {
  ChartLine,
  Globe2,
  LucideIcon,
  ShoppingBag,
} from "lucide-react";

type Pillar = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const pillars: Pillar[] = [
  {
    title: "Performance Marketing & Partnerships",
    description:
      "We partner with top-tier global brands to drive high-converting traffic through targeted content strategies, data analytics, and SEO optimization.",
    Icon: ChartLine,
  },
  {
    title: "Digital Content Media",
    description:
      "Building highly engaged niche communities and authority digital publications that deliver value, insights, and curated product recommendations to global audiences.",
    Icon: Globe2,
  },
  {
    title: "E-Commerce & Supply Chain",
    description:
      "Operating agile e-commerce brands utilizing automated, lean fulfillment models to deliver high-quality consumer goods globally.",
    Icon: ShoppingBag,
  },
];

export function PillarsSection() {
  return (
    <section id="ventures" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
            What We Do
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Diversified digital operations built for durable growth.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            DC Ventures manages a portfolio of multi-channel businesses across
            media, commerce, and strategic partnership ecosystems.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300/40 hover:bg-white/[0.07] hover:shadow-[0_24px_80px_rgba(79,70,229,0.22)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-emerald-300/40 group-hover:bg-emerald-300/10">
                <Icon className="h-7 w-7 text-emerald-300" strokeWidth={1.8} />
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-zinc-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
