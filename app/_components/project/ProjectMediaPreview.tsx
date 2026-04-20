import Image from "next/image";
import { getStreamEmbedUrl } from "@/lib/utils";
import type { ProjectItem } from "./data/projects";

type ProjectMediaPreviewProps = {
  project: ProjectItem;
  onOpenDetail: () => void;
};

export default function ProjectMediaPreview({
  project,
  onOpenDetail,
}: ProjectMediaPreviewProps) {
  return (
    <div className="order-1 lg:order-2 min-h-[180px] lg:min-h-full">
      <div className="relative h-full rounded-2xl bg-black/25 overflow-hidden flex items-center justify-center">
        {project.videoUrl ? (
          <VideoPreview project={project} />
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
          type="button"
          aria-label={`${project.title} 자세히 보기`}
          onClick={onOpenDetail}
          className="absolute top-0 right-0 w-full h-full cursor-pointer z-10"
        />
      </div>
    </div>
  );
}

function VideoPreview({ project }: { project: ProjectItem }) {
  if (!project.videoUrl) {
    return null;
  }

  return (
    <>
      <ProjectAmbientLayer />

      <div className="relative z-10 flex w-full h-full items-center justify-center p-2 md:p-3">
        <div className="relative w-full max-w-full aspect-[16/8]">
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
  );
}

function ProjectAmbientLayer() {
  return (
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
    </>
  );
}
