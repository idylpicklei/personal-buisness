import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
          <Sparkles className="h-4 w-4 text-emerald-300" />
          Venture studio for global digital brand operations
        </div>

        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
          Scaling Digital Innovation. Building Global Brands.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
          DC Ventures is a premier venture studio specializing in data-driven
          affiliate marketing, global e-commerce supply chains, and high-impact
          digital content creation.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#ventures"
            className="group inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-100 hover:shadow-[0_24px_80px_rgba(79,70,229,0.22)] sm:w-auto"
          >
            Explore Our Portfolio
            <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300/60 hover:bg-white/10 sm:w-auto"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
