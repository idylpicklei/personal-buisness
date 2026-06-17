import { Activity, Layers, Zap } from "lucide-react";

const stats = [
  { label: "Active Channels", value: "12+", icon: Layers },
  { label: "Avg. Conversion", value: "4.8%", icon: Activity },
  { label: "Ops Uptime", value: "99.9%", icon: Zap },
];

export function HeroDashboard() {
  return (
    <div className="relative mx-auto mt-16 max-w-4xl lg:mt-0">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-indigo-500/20 via-transparent to-emerald-500/20 blur-2xl" />

      <div className="gradient-border relative overflow-hidden rounded-[1.75rem] p-6 shadow-[0_32px_100px_rgba(79,70,229,0.25)]">
        <div className="absolute inset-0 tech-grid-full opacity-40" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                Live Operations
              </span>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-indigo-200">
              dcventures.io
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map(({ label, value, icon: Icon }, index) => (
              <div
                key={label}
                className="glass-panel rounded-xl p-4 transition-all duration-300 hover:border-indigo-400/30 hover:bg-white/[0.06]"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <Icon className="mb-3 h-4 w-4 text-indigo-300" strokeWidth={1.8} />
                <div className="font-mono text-2xl font-semibold text-white">
                  {value}
                </div>
                <div className="mt-1 text-xs text-zinc-400">{label}</div>
              </div>
            ))}
          </div>

          <div className="glass-panel rounded-xl p-4">
            <div className="mb-3 flex items-center justify-between text-xs text-zinc-400">
              <span>Traffic &amp; Revenue Pipeline</span>
              <span className="font-mono text-emerald-300">+24.6%</span>
            </div>
            <div className="flex h-16 items-end gap-1.5">
              {[40, 55, 45, 70, 60, 85, 75, 92, 88, 100].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-indigo-600/40 to-indigo-400/80 transition-all duration-300 hover:from-emerald-600/40 hover:to-emerald-400/80"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-6 -top-6 hidden animate-float rounded-2xl border border-white/10 bg-[#0a0f1a]/90 px-4 py-3 shadow-xl backdrop-blur lg:block">
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          Network Status
        </div>
        <div className="mt-1 text-sm font-semibold text-emerald-300">
          All Systems Operational
        </div>
      </div>

      <div className="absolute -bottom-4 -left-6 hidden animate-float-delayed rounded-2xl border border-white/10 bg-[#0a0f1a]/90 px-4 py-3 shadow-xl backdrop-blur lg:block">
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          Global Reach
        </div>
        <div className="mt-1 text-sm font-semibold text-indigo-200">
          3M+ Annual Impressions
        </div>
      </div>
    </div>
  );
}
