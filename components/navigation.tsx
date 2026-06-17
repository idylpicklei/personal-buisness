import { Hexagon } from "lucide-react";

const links = [
  { label: "Our Ventures", href: "#ventures" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "About", href: "#about" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070d]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="group flex items-center gap-3" aria-label="DC Ventures home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-400/30 bg-white/5 shadow-[0_24px_80px_rgba(79,70,229,0.22)] transition-all duration-300 group-hover:border-indigo-300/70 group-hover:bg-indigo-400/10">
            <Hexagon className="h-5 w-5 text-indigo-300" strokeWidth={1.8} />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.34em] text-white">
            DC Ventures
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-all duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-100 hover:shadow-[0_24px_80px_rgba(79,70,229,0.22)]"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}
