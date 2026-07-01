import { FolderKanban, Layers, Radio } from "lucide-react";
import { getActiveProjects, getCategoryCounts } from "@/data/projects";

export function HeroDashboard() {
  const activeProjects = getActiveProjects();
  const categoryCounts = getCategoryCounts();
  const verticalCount = Object.keys(categoryCounts).length;

  const stats = [
    {
      label: "Active Properties",
      value: String(activeProjects.length),
      icon: FolderKanban,
    },
    {
      label: "Verticals Covered",
      value: String(verticalCount),
      icon: Layers,
    },
    {
      label: "Portfolio Status",
      value: "Live",
      icon: Radio,
    },
  ];

  const recentProjects = activeProjects.slice(0, 4);

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
                Portfolio Overview
              </span>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-indigo-200">
              dcventures.io
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="glass-panel rounded-xl p-4 transition-all duration-300 hover:border-indigo-400/30 hover:bg-white/[0.06]"
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
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
              Active Portfolio
            </div>
            <div className="space-y-2">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <span className="text-sm font-medium text-zinc-200">
                    {project.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-300">
                    {project.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-6 -top-6 hidden animate-float rounded-2xl border border-white/10 bg-[#0a0f1a]/90 px-4 py-3 shadow-xl backdrop-blur lg:block">
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          Partner Ready
        </div>
        <div className="mt-1 text-sm font-semibold text-emerald-300">
          Compliance-First Operations
        </div>
      </div>

      <div className="absolute -bottom-4 -left-6 hidden animate-float-delayed rounded-2xl border border-white/10 bg-[#0a0f1a]/90 px-4 py-3 shadow-xl backdrop-blur lg:block">
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          Marketing Channels
        </div>
        <div className="mt-1 text-sm font-semibold text-indigo-200">
          SEO · Email · Paid · Affiliate
        </div>
      </div>
    </div>
  );
}
