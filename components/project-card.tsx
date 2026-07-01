import { ArrowUpRight } from "lucide-react";
import { categoryLabels, type Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.05] hover:shadow-[0_24px_80px_rgba(79,70,229,0.15)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/0 to-transparent transition-all duration-300 group-hover:via-indigo-400/40" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-indigo-200">
            {categoryLabels[project.category]}
          </span>
          <span
            className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${
              project.status === "active"
                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                : "border-zinc-600/30 bg-zinc-800/30 text-zinc-400"
            }`}
          >
            {project.status}
          </span>
        </div>

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-all duration-300 hover:border-indigo-400/40 hover:text-indigo-200"
            aria-label={`Visit ${project.name}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
        {project.name}
      </h3>
      <p className="mt-3 flex-1 leading-7 text-zinc-400">{project.description}</p>

      <ul className="mt-6 space-y-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2 text-sm leading-6 text-zinc-300"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
            {highlight}
          </li>
        ))}
      </ul>

      {project.metrics && project.metrics.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/5 pt-6">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="glass-panel rounded-xl px-3 py-3">
              <div className="font-mono text-lg font-semibold text-white">
                {metric.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
