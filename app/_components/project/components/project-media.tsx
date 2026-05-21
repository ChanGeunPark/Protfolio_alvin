"use client";

import Image from "next/image";
import { getStreamEmbedUrl } from "@/lib/utils";

import { ProjectItem } from "../data/projects";

type ProjectMediaProps = {
  project: ProjectItem;
  mode?: "card" | "modal";
  onClick?: () => void;
};

export function ProjectMedia({
  project,
  mode = "card",
  onClick,
}: ProjectMediaProps) {
  const hasMedia = Boolean(project.videoUrl || project.imageUrl);

  if (!hasMedia) return null;

  if (mode === "modal") {
    return (
      <div className="w-[80%] mx-auto overflow-hidden rounded-2xl shadow-elevation02">
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <ProjectMediaContent
            project={project}
            imageClassName="object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full rounded-2xl bg-black/25 overflow-hidden flex items-center justify-center">
      {project.videoUrl && <ProjectAmbientLayer />}

      <div className="relative z-10 flex w-full h-full items-center justify-center p-2 md:p-3">
        <div
          className="relative w-full max-w-full"
          style={{ aspectRatio: project.videoUrl ? "16/8" : undefined }}
        >
          <ProjectMediaContent
            project={project}
            imageClassName="w-full h-full object-contain"
          />
        </div>
      </div>

      {onClick && (
        <button
          type="button"
          aria-label={`${project.title} 상세 보기`}
          onClick={onClick}
          className="absolute top-0 right-0 w-full h-full cursor-pointer z-10"
        />
      )}
    </div>
  );
}

function ProjectMediaContent({
  project,
  imageClassName,
}: {
  project: ProjectItem;
  imageClassName: string;
}) {
  if (project.videoUrl) {
    return (
      <iframe
        src={getStreamEmbedUrl(project.videoUrl)}
        className="absolute inset-0 h-full w-full rounded-xl border-0"
        title={`${project.title} 미리보기 동영상`}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  if (!project.imageUrl) return null;

  return (
    <Image
      src={project.imageUrl}
      alt={project.title}
      width={1000}
      height={1000}
      quality={80}
      className={imageClassName}
    />
  );
}

function ProjectAmbientLayer() {
  return (
    <div className="project-ambient-layer">
      <div className="absolute inset-0 project-ambient-blobs">
        <div className="project-blob project-blob-yellow" />
        <div className="project-blob project-blob-red" />
        <div className="project-blob project-blob-green" />
      </div>
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 project-ambient-grain opacity-25" />
    </div>
  );
}
