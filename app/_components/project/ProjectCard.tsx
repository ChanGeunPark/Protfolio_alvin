"use client";

import { cls } from "@/lib/utils";
import type { ProjectItem } from "./data/projects";
import { ProjectMedia } from "./ProjectMedia";
import ProjectMeta from "./ProjectMeta";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  onOpen: (project: ProjectItem) => void;
};

export default function ProjectCard({
  project,
  index,
  onOpen,
}: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      data-project-scene
      id={`project-scene-${index}`}
      className="relative h-screen"
    >
      <div
        data-project-card
        className="absolute right-0 bottom-0 w-[94%] md:w-[92%] min-h-[92%] h-auto rounded-3xl p-5 md:p-7 lg:p-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 h-full">
          <div className="order-2 lg:order-1 min-h-0">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                data-project-badge
                className="inline-flex text-xs px-2.5 py-1 rounded-full bg-black/30 text-zinc-200"
              >
                {project.organization}
              </span>
              <span className="inline-flex text-xs px-2.5 py-1 rounded-full bg-white/10 text-zinc-100">
                Project {projectNumber}
              </span>
            </div>

            <h3 className="text-white text-lg md:text-3xl font-semibold">
              {project.title}
            </h3>

            <p className="text-zinc-300 mt-2 text-sm md:text-base">
              {project.oneLine}
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <ProjectMeta label="역할" value={project.role} wide />
              {project.period && (
                <ProjectMeta label="기간" value={project.period} />
              )}
              {project.contributionRate && (
                <ProjectMeta label="기여도" value={project.contributionRate} />
              )}
            </div>

            <div className="mt-4">
              <h4 className="text-zinc-100 text-sm md:text-base font-semibold mb-2">
                핵심 요약
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed"
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-approveSub" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-white/10 text-zinc-100"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 6 && (
                <span className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-black/25 text-zinc-300">
                  +{project.tech.length - 6}
                </span>
              )}
            </div>

            <button
              type="button"
              className={cls(
                "group relative inline-flex items-center gap-2 text-approveSub font-semibold text-sm md:text-base rounded-md px-5 py-2 bg-gradient-to-r from-approveSub/20 via-white/5 to-approveSub/10 backdrop-blur-lg border border-approveSub/25 hover:bg-approveSub/30 hover:text-white hover:border-approveSub/60 shadow-lg shadow-approveSub/5 transition-all duration-300 cursor-pointer overflow-hidden",
                "focus:outline-none focus:ring-2 focus:ring-approveSub/70 focus:ring-offset-2",
                "w-full mt-6",
                "max-lg",
              )}
              onClick={() => onOpen(project)}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-approveSub group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                자세히 보기
              </span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-approveSub/15 to-transparent pointer-events-none" />
            </button>
          </div>

          <div className="order-1 lg:order-2 min-h-[180px] lg:min-h-full">
            <ProjectMedia project={project} onClick={() => onOpen(project)} />
          </div>
        </div>
      </div>
    </article>
  );
}
