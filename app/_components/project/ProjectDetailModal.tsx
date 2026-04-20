"use client";

import Image from "next/image";
import type { ProjectItem } from "./data/projects";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { getStreamEmbedUrl } from "@/lib/utils";

interface Props {
  project: ProjectItem;
}

export default function ProjectDetailModal({ project }: Props) {
  return (
    <div className="relative w-full min-h-[80vh] text-white">
      {/* 배경 블러 이미지 */}
      {project.imageUrl ? (
        <div className="absolute left-0 top-0 z-0 w-full h-full overflow-hidden rounded-2xl">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover blur-2xl scale-110 z-0 opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-zinc-950/80 via-zinc-950/90 to-zinc-950" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900 to-zinc-950 rounded-2xl" />
      )}

      <div className="relative z-10 p-6 md:p-8 lg:p-10 space-y-8">
        {(project.videoUrl || project.imageUrl) && (
          <div className="w-[80%] mx-auto overflow-hidden rounded-2xl shadow-elevation02">
            {project.videoUrl ? (
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src={getStreamEmbedUrl(project.videoUrl)}
                  className="absolute inset-0 h-full w-full rounded-xl border-0"
                  title={`${project.title} 미리보기 동영상`}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ) : project.imageUrl ? (
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={project.imageUrl}
                  alt="프로젝트 미리보기"
                  fill
                  quality={90}
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        )}

        {/* 헤더 */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-zinc-300">
              {project.organization}
            </span>
            {project.isLive !== undefined && (
              <span
                className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${
                  project.isLive
                    ? "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30"
                    : "bg-zinc-700/50 text-zinc-400 ring-1 ring-zinc-600/30"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.isLive
                      ? "bg-emerald-400 animate-pulse"
                      : "bg-zinc-500"
                  }`}
                />
                {project.isLive ? "서비스 중" : "서비스 종료"}
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {project.title}
          </h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            {project.oneLine}
          </p>

          {/* 링크 버튼 */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 transition-colors"
              >
                <HiExternalLink className="w-3.5 h-3.5" />
                사이트 바로가기
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 transition-colors"
              >
                <FaGithub className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* 메타 정보 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {project.period && (
            <InfoCard label="개발 기간" value={project.period} />
          )}
          {project.members && (
            <InfoCard label="구성원" value={project.members} />
          )}
          {project.contributionRate && (
            <InfoCard label="기여도" value={project.contributionRate} />
          )}
          <InfoCard label="역할" value={project.role} colSpan />
        </div>

        {/* 핵심 요약 */}
        <Section title="핵심 요약">
          <ul className="grid gap-2 md:grid-cols-2">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-xl bg-white/5 p-3 text-sm text-zinc-300 ring-1 ring-white/8"
              >
                <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-approveSub" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 기술 스택 */}
        <Section title="기술 스택">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-zinc-200 ring-1 ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        {/* 기술 선정 이유 */}
        {project.techReasons && project.techReasons.length > 0 && (
          <Section title="기술 선정 이유">
            <div className="space-y-2">
              {project.techReasons.map((item) => (
                <div
                  key={item.tech}
                  className="flex gap-3 p-3 rounded-xl bg-white/5 ring-1 ring-white/8"
                >
                  <span className="shrink-0 text-xs font-semibold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-md self-start mt-0.5">
                    {item.tech}
                  </span>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* 주요 기여 */}
        <Section title="주요 기여">
          <ul className="space-y-2">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-zinc-300"
              >
                <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-violet-500/20 ring-1 ring-violet-500/40 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* 성과 */}
        <Section title="성과">
          <ol className="space-y-2">
            {project.achievements.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-zinc-300"
              >
                <span className="shrink-0 w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center ring-1 ring-amber-500/30 mt-0.5">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </Section>

        {/* 개발 이슈 & 해결 */}
        {project.devIssues && project.devIssues.length > 0 && (
          <Section title="개발 이슈 & 해결">
            <div className="space-y-3">
              {project.devIssues.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden ring-1 ring-white/8"
                >
                  <div className="flex items-start gap-3 p-3 bg-red-500/8">
                    <span className="shrink-0 text-xs font-semibold text-red-400 bg-red-500/15 px-2 py-0.5 rounded-md mt-0.5">
                      이슈
                    </span>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {item.issue}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-emerald-500/8 border-t border-white/5">
                    <span className="shrink-0 text-xs font-semibold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-md mt-0.5">
                      해결
                    </span>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* 개발 후 느낀점 */}
        {project.retrospective && (
          <Section title="개발 후 느낀점">
            <blockquote className="relative pl-4 py-1">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-violet-500 to-sky-500 rounded-full" />
              <p className="text-zinc-300 text-sm leading-relaxed italic">
                {project.retrospective}
              </p>
            </blockquote>
          </Section>
        )}
      </div>
    </div>
  );
}

function InfoCard({
  label,
  value,
  colSpan,
}: {
  label: string;
  value: string;
  colSpan?: boolean;
}) {
  return (
    <div
      className={`p-3 rounded-xl bg-white/5 ring-1 ring-white/8 space-y-1 ${
        colSpan ? "col-span-2 md:col-span-3" : ""
      }`}
    >
      <p className="text-xs text-zinc-500 font-medium">{label}</p>
      <p className="text-sm text-zinc-200 leading-relaxed">{value}</p>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">
        {title}
      </h3>
      {children}
    </div>
  );
}
