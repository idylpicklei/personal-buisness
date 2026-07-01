const items = [
  "SEO & Organic Growth",
  "Affiliate Marketing",
  "Content Publishing",
  "E-Commerce Operations",
  "Email Marketing",
  "Paid Acquisition",
  "Conversion Optimization",
  "Partner Compliance",
];

export function TechMarquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative border-y border-white/5 bg-white/[0.02] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05070d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05070d] to-transparent" />

      <div className="flex w-max animate-marquee gap-8">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
