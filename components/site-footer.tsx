import { Hexagon } from "lucide-react";

const footerLinks = ["Privacy Policy", "Terms of Service", "Affiliate Disclosure"];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-12 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10">
              <Hexagon className="h-4 w-4 text-indigo-300" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                DC Ventures
              </p>
              <p className="mt-1 text-xs text-zinc-500">dcventures.io</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-zinc-500 transition-all duration-300 hover:text-indigo-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright &copy; 2026 DC Ventures LLC. All rights reserved.</p>
          <a
            href="mailto:contact@dcventures.io"
            className="font-mono text-xs text-zinc-400 transition-colors hover:text-indigo-300"
          >
            contact@dcventures.io
          </a>
        </div>
      </div>
    </footer>
  );
}
