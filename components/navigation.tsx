"use client";

import { Hexagon, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Our Ventures", href: "#ventures" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "About", href: "#about" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070d]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="group flex items-center gap-3" aria-label="DC Ventures home">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-400/30 bg-white/5 shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 group-hover:border-indigo-300/70 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]">
            <Hexagon className="h-5 w-5 text-indigo-300" strokeWidth={1.8} />
            <span className="absolute inset-0 rounded-2xl bg-indigo-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.34em] text-white">
            DC <span className="text-indigo-300">Ventures</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-4 -bottom-px h-px scale-x-0 bg-gradient-to-r from-indigo-400 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.45)] sm:inline-flex"
          >
            Contact Us
          </a>

          <button
            type="button"
            className="rounded-xl border border-white/10 p-2 text-zinc-300 transition-colors hover:bg-white/5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#05070d]/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
