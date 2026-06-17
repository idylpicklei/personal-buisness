import { ArrowRight, Sparkles } from "lucide-react";
import { HeroDashboard } from "@/components/hero-dashboard";
import { TechMarquee } from "@/components/tech-marquee";

export function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-20 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="tech-grid absolute inset-0 opacity-50" />
          <div className="absolute left-1/2 top-0 h-[40rem] w-[50rem] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[100px] animate-pulse-glow" />
          <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-[80px]" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[80px]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200 backdrop-blur lg:mx-0">
              <Sparkles className="h-4 w-4 text-emerald-300" />
              <span className="font-mono text-xs uppercase tracking-widest">
                Venture Studio · Digital Media
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-gradient">Scaling Digital Innovation.</span>
              <br />
              <span className="text-white">Building Global Brands.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-zinc-400 lg:mx-0">
              DC Ventures is a premier venture studio specializing in data-driven
              affiliate marketing, global e-commerce supply chains, and high-impact
              digital content creation.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#ventures"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-indigo-500 hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] sm:w-auto"
              >
                Explore Our Portfolio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:bg-white/[0.08] sm:w-auto"
              >
                Partner With Us
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              {["Affiliate", "E-Commerce", "Content Media"].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500"
                >
                  <span className="h-px w-4 bg-indigo-400/50" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <HeroDashboard />
        </div>
      </section>

      <TechMarquee />
    </>
  );
}
