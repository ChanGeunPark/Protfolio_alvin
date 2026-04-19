"use client";

import Image from "next/image";
import { useProjectSceneMotion } from "./hooks/useProjectSceneMotion";
import ProjectIntroScene from "./projectIntroScene";
import { getStreamEmbedUrl } from "@/lib/utils";
import { useAppModal } from "@/components/common/modal";
import { allProjects, type ProjectItem } from "./data/projects";
import ProjectDetailModal from "./ProjectDetailModal";

function Project() {
  useProjectSceneMotion();

  const { openModal } = useAppModal();
  const handleOpenModal = (project: ProjectItem) => {
    openModal({
      title: project.title,
      children: <ProjectDetailModal project={project} />,
    });
  };

  return (
    <section
      id="project"
      data-project-section
      className="relative min-h-screen md:py-28"
    >
      <div className="mx-auto">
        {/* 프로젝트 타이틀 */}
        <ProjectIntroScene />

        {/* 프로젝트 카드 */}
        <div className="space-y-8 md:space-y-10">
          {allProjects.map((project, index) => (
            <article
              key={`${project.organization}-${project.title}`}
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
                        Project {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-white text-lg md:text-3xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 mt-2 text-sm md:text-base">
                      {project.oneLine}
                    </p>
                    <p className="text-zinc-200 mt-3 text-sm md:text-base leading-relaxed">
                      <span className="text-zinc-400 mr-2">역할</span>
                      {project.role}
                    </p>

                    <div className="mt-4">
                      <h4 className="text-zinc-100 text-sm md:text-base font-semibold mb-2">
                        주요 기여
                      </h4>
                      <ul className="text-zinc-300 text-sm leading-relaxed list-disc pl-5 space-y-1">
                        {project.contributions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-zinc-100 text-sm md:text-base font-semibold mb-2">
                        성과
                      </h4>
                      <ol className="text-zinc-300 text-sm leading-relaxed list-decimal pl-5 space-y-1">
                        {project.achievements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-white/10 text-zinc-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 min-h-[180px] lg:min-h-full">
                    <div className="relative h-full rounded-2xl bg-black/25 overflow-hidden flex items-center justify-center">
                      {project.videoUrl ? (
                        <>
                          <div className="project-ambient-layer">
                            <div className="absolute inset-0 project-ambient-blobs">
                              <div className="project-blob project-blob-yellow" />
                              <div className="project-blob project-blob-red" />
                              <div className="project-blob project-blob-green" />
                            </div>
                            <div className="absolute inset-0 bg-black/45" />
                            <div className="absolute inset-0 project-ambient-grain opacity-25" />
                          </div>

                          <div className="relative z-10 flex w-full h-full items-center justify-center p-2 md:p-3">
                            <div
                              className="relative w-full max-w-full"
                              style={{
                                aspectRatio: "16/8",
                              }}
                            >
                              <iframe
                                src={getStreamEmbedUrl(project.videoUrl)}
                                className="absolute inset-0 h-full w-full rounded-xl border-0"
                                title={`${project.title} 미리보기 동영상`}
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                allowFullScreen
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </>
                      ) : project.imageUrl ? (
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          width={1000}
                          height={1000}
                          quality={100}
                          className="w-full h-full object-contain"
                        />
                      ) : null}

                      <button
                        onClick={() => handleOpenModal(project)}
                        className="absolute top-0 right-0 w-full h-full cursor-pointer z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style jsx>{`
        .project-ambient-layer {
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          overflow: hidden;
          pointer-events: none;
          isolation: isolate;
          contain: paint;
        }

        .project-ambient-blobs {
          position: absolute;
          inset: -18%;
          overflow: hidden;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .project-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(56px);
          opacity: 0.8;
          mix-blend-mode: screen;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .project-blob-yellow {
          width: 46%;
          height: 50%;
          top: 42%;
          left: 8%;
          background: #edb74d;
          animation: projectBlobYellow 9s ease-in-out infinite;
        }

        .project-blob-green {
          width: 52%;
          height: 46%;
          top: 10%;
          right: -4%;
          background: #6fb18a;
          animation: projectBlobGreen 10s ease-in-out infinite;
        }

        .project-blob-red {
          width: 44%;
          height: 56%;
          top: 48%;
          right: 12%;
          background: #eb6666;
          animation: projectBlobRed 8.5s linear infinite;
        }

        .project-ambient-grain {
          background-image:
            radial-gradient(
              circle at 20% 20%,
              rgba(255, 255, 255, 0.08) 0,
              transparent 40%
            ),
            radial-gradient(
              circle at 80% 60%,
              rgba(255, 255, 255, 0.07) 0,
              transparent 45%
            );
          background-size: 100% 100%;
          filter: contrast(110%);
        }

        @keyframes projectBlobYellow {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          30% {
            transform: translate3d(12%, 20%, 0) scale(1.18);
          }
          60% {
            transform: translate3d(24%, -14%, 0) scale(1.28);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes projectBlobGreen {
          0% {
            transform: translate3d(0, 0, 0) scale(1.2);
          }
          30% {
            transform: translate3d(-10%, 24%, 0) scale(1);
          }
          60% {
            transform: translate3d(-28%, 12%, 0) scale(1.08);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1.2);
          }
        }

        @keyframes projectBlobRed {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          30% {
            transform: translate3d(-22%, -24%, 0) scale(1.34);
          }
          60% {
            transform: translate3d(-12%, -4%, 0) scale(1.08);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}

export default Project;
