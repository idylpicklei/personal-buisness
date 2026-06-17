import { BadgeCheck, BarChart3 } from "lucide-react";

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

export function ApproachSection() {
  return (
    <section id="partnerships" className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Our Approach
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Partner-ready growth systems with brand integrity at the center.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Our operating model is designed for transparent, white-hat digital
            growth across editorial content, search discovery, audience
            development, and commerce optimization.
          </p>
        </div>

        <div className="grid gap-5">
          {principles.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07]"
            >
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-300/10">
                  <Icon className="h-6 w-6 text-emerald-300" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-zinc-300">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
