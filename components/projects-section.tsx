"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { SectionLabel } from "@/components/ui/section-label";
import {
  categoryLabels,
  getCategoryCounts,
  getProjectsByCategory,
  projects,
  type ProjectCategory,
} from "@/data/projects";

const filterCategories: (ProjectCategory | "all")[] = [
  "all",
  "affiliate",
  "content",
  "ecommerce",
  "media",
  "saas",
  "other",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory | "all">("all");

  const categoryCounts = useMemo(() => getCategoryCounts(), []);
  const filteredProjects = useMemo(
    () => getProjectsByCategory(activeCategory),
    [activeCategory],
  );

  return (
    <section id="projects" className="relative px-6 py-28 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Projects we&apos;ve{" "}
            <span className="text-gradient-indigo">built and operate.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A selection of digital properties demonstrating our ability to build
            audiences, drive conversions, and maintain brand-safe marketing
            operations for partner networks.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filterCategories.map((category) => {
            const count =
              category === "all"
                ? projects.length
                : (categoryCounts[category] ?? 0);

            if (category !== "all" && count === 0) return null;

            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "border-indigo-400/40 bg-indigo-500/15 text-indigo-200 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                    : "border-white/10 bg-white/[0.03] text-zinc-500 hover:border-white/20 hover:text-zinc-300"
                }`}
              >
                {categoryLabels[category]}
                {category !== "all" ? ` (${count})` : ""}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="mt-12 text-center text-zinc-500">
            No projects in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
