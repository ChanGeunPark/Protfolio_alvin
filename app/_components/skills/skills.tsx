"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRecoil,
  SiApollographql,
  SiGraphql,
  SiFramer,
  SiGreensock,
  SiLottiefiles,
  SiReacthookform,
  SiSwiper,
  SiRadixui,
  SiAuth0,
  SiFirebase,
  SiPm2,
  SiGooglecloud,
  SiLangchain,
  SiOpenai,
} from "react-icons/si";
import type { IconType } from "react-icons/lib";
import { useSkillsSceneMotion } from "./hooks/useSkillsSceneMotion";
import Image from "next/image";

type SkillItem = {
  name: string;
  description: string;
  Icon?: IconType;
  iconImage?: string;
  iconColor: string;
  iconBg: string;
};

type SkillCategory = {
  title: string;
  gradientFrom: string;
  gradientTo: string;
  items: SkillItem[];
  parallaxSpeed: number;
  yOffset: number;
  xGap: number;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Core",
    gradientFrom: "#60A5FA",
    gradientTo: "#22D3EE",
    items: [
      {
        name: "React",
        description: "컴포넌트 기반 UI 구축 및 커스텀 훅 설계",
        Icon: SiReact,
        iconColor: "#61DAFB",
        iconBg: "rgba(97,218,251,0.12)",
      },
      {
        name: "Next.js",
        description: "SSR/SSG 기반 풀스택 앱 개발 및 파일 라우팅",
        Icon: SiNextdotjs,
        iconColor: "#ffffff",
        iconBg: "rgba(255,255,255,0.08)",
      },
      {
        name: "TypeScript",
        description: "타입 안전성 확보로 대규모 코드베이스 유지보수",
        Icon: SiTypescript,
        iconColor: "#3178C6",
        iconBg: "rgba(49,120,198,0.15)",
      },
    ],
    parallaxSpeed: 0.45,
    yOffset: -28,
    xGap: 8,
  },
  {
    title: "Frontend",
    gradientFrom: "#34D399",
    gradientTo: "#06B6D4",
    items: [
      {
        name: "Tailwind CSS",
        description: "유틸리티 클래스로 빠르고 일관된 반응형 UI 구현",
        Icon: SiTailwindcss,
        iconColor: "#06B6D4",
        iconBg: "rgba(6,182,212,0.12)",
      },
      {
        name: "Zustand",
        description: "경량 전역 상태 관리로 복잡한 UI 상태 제어",
        iconImage: "/images/icons/zustandLogo.svg",
        iconColor: "#F97316",
        iconBg: "rgba(249,115,22,0.12)",
      },
      {
        name: "Recoil",
        description: "아톰/셀렉터 기반 세분화된 리액트 상태 관리",
        Icon: SiRecoil,
        iconColor: "#3578e5",
        iconBg: "rgba(53,120,229,0.12)",
      },
      {
        name: "Apollo Client",
        description: "GraphQL 쿼리 캐싱 및 서버 상태 동기화",
        Icon: SiApollographql,
        iconColor: "#A78BFA",
        iconBg: "rgba(167,139,250,0.12)",
      },
      {
        name: "GraphQL",
        description: "선언형 데이터 요청으로 API 오버페칭 방지",
        Icon: SiGraphql,
        iconColor: "#E10098",
        iconBg: "rgba(225,0,152,0.12)",
      },
      {
        name: "Framer Motion",
        description: "선언형 애니메이션으로 풍부한 인터랙션 구현",
        Icon: SiFramer,
        iconColor: "#60A5FA",
        iconBg: "rgba(96,165,250,0.12)",
      },
      {
        name: "GSAP",
        description: "스크롤 기반 고성능 타임라인 애니메이션 구현",
        Icon: SiGreensock,
        iconColor: "#88CE02",
        iconBg: "rgba(136,206,2,0.12)",
      },
      {
        name: "Lottie",
        description: "JSON 벡터 애니메이션으로 앱에 생동감 부여",
        Icon: SiLottiefiles,
        iconColor: "#00C7B1",
        iconBg: "rgba(0,199,177,0.12)",
      },
    ],
    parallaxSpeed: 1.95,
    yOffset: 18,
    xGap: 72,
  },
  {
    title: "UI / Interaction",
    gradientFrom: "#F472B6",
    gradientTo: "#A78BFA",
    items: [
      {
        name: "React Hook Form",
        description: "비제어 컴포넌트 기반 고성능 폼 유효성 검사",
        Icon: SiReacthookform,
        iconColor: "#EC5990",
        iconBg: "rgba(236,89,144,0.12)",
      },
      {
        name: "Swiper",
        description: "모바일 친화적 터치 슬라이더 및 캐러셀 구현",
        Icon: SiSwiper,
        iconColor: "#6332F6",
        iconBg: "rgba(99,50,246,0.12)",
      },
      {
        name: "React Modal",
        description: "접근성과 포커스 트랩을 갖춘 모달 UI 구현",
        iconColor: "#F97316",
        iconBg: "rgba(249,115,22,0.12)",
      },
      {
        name: "Dropzone",
        description: "드래그 앤 드롭 파일 업로드 인터페이스 구현",
        iconColor: "#3B82F6",
        iconBg: "rgba(59,130,246,0.12)",
      },
      {
        name: "Recharts",
        description: "D3 기반 반응형 데이터 시각화 차트 구현",
        iconColor: "#22C55E",
        iconBg: "rgba(34,197,94,0.12)",
      },
    ],
    parallaxSpeed: 0.7,
    yOffset: -16,
    xGap: 26,
  },
  {
    title: "Auth / SEO / App",
    gradientFrom: "#FB923C",
    gradientTo: "#FBBF24",
    items: [
      {
        name: "NextAuth",
        description: "OAuth 소셜 로그인 및 세션 기반 인증 구현",
        Icon: SiAuth0,
        iconColor: "#EB5424",
        iconBg: "rgba(235,84,36,0.12)",
      },
      {
        name: "SEO",
        description: "메타태그·Open Graph·sitemap으로 검색 최적화",
        iconColor: "#EAB308",
        iconBg: "rgba(234,179,8,0.12)",
      },
      {
        name: "PWA",
        description: "서비스 워커로 오프라인 지원 설치형 웹앱 구현",
        iconColor: "#8B5CF6",
        iconBg: "rgba(139,92,246,0.12)",
      },
      {
        name: "Web Push",
        description: "브라우저 알림으로 사용자 재참여 유도 구현",
        iconColor: "#EC4899",
        iconBg: "rgba(236,72,153,0.12)",
      },
    ],
    parallaxSpeed: 1.55,
    yOffset: 24,
    xGap: 106,
  },
  {
    title: "Infra / Service",
    gradientFrom: "#4ADE80",
    gradientTo: "#34D399",
    items: [
      {
        name: "Firebase",
        description: "실시간 DB, 인증, Storage 통합 백엔드 구축",
        Icon: SiFirebase,
        iconColor: "#FFCA28",
        iconBg: "rgba(255,202,40,0.12)",
      },
      {
        name: "Toss Payments",
        description: "결제 API 연동 및 웹훅 기반 주문 처리",
        iconImage: "/images/icons/Toss_App_Icon.png",
        iconColor: "#0064FF",
        iconBg: "rgba(0,100,255,0.12)",
      },
      {
        name: "EmailJS",
        description: "서버 없이 클라이언트에서 직접 이메일 전송",
        iconImage: "/images/icons/emailjsLogo.png",
        iconColor: "#EF4444",
        iconBg: "rgba(239,68,68,0.12)",
      },
      {
        name: "GCP",
        description: "클라우드 VM·스토리지 기반 서버 인프라 구축",
        Icon: SiGooglecloud,
        iconColor: "#4285F4",
        iconBg: "rgba(66,133,244,0.12)",
      },
    ],
    parallaxSpeed: 0.9,
    yOffset: -12,
    xGap: 38,
  },
  {
    title: "AI / Search",
    gradientFrom: "#8B5CF6",
    gradientTo: "#60A5FA",
    items: [
      {
        name: "LangChain",
        description: "LLM 체인 및 RAG 파이프라인 구축",
        Icon: SiLangchain,
        iconColor: "#34D399",
        iconBg: "rgba(52,211,153,0.12)",
      },
      {
        name: "Azure OpenAI",
        description: "GPT API 기반 AI 기능 서비스 통합",
        Icon: SiOpenai,
        iconColor: "#10B981",
        iconBg: "rgba(16,185,129,0.12)",
      },
      {
        name: "Pinecone",
        description: "벡터 DB로 시맨틱 유사도 검색 구현",
        iconColor: "#1C17FF",
        iconBg: "rgba(98,92,255,0.12)",
      },
    ],
    parallaxSpeed: 1.2,
    yOffset: 30,
    xGap: 84,
  },
];

function SkillIcon({ skill }: { skill: SkillItem }) {
  return (
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
      style={{ background: skill.iconBg }}
    >
      {skill.iconImage ? (
        <Image
          src={skill.iconImage}
          alt={skill.name}
          width={18}
          height={18}
          className="w-6 h-6"
        />
      ) : skill.Icon ? (
        <skill.Icon size={18} style={{ color: skill.iconColor }} />
      ) : (
        <span
          className="text-[10px] font-bold leading-none"
          style={{ color: skill.iconColor }}
        >
          {skill.name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
}

function Skills() {
  useSkillsSceneMotion();

  return (
    <section id="skills" data-skills-section className="relative">
      <div data-skills-viewport className="h-screen overflow-hidden">
        <div className="h-full flex items-center">
          <div
            data-skills-track
            className="flex items-center gap-0 pl-8 md:px-10 lg:px-14 py-16 w-max"
          >
            {/* Intro panel */}
            <div className="w-[80vw] max-w-[460px] shrink-0 pr-4">
              <p className="text-zinc-500 text-xs md:text-sm tracking-[0.25em] uppercase">
                Tech Stack
              </p>
              <h2 className="text-white text-5xl md:text-7xl font-bold mt-3 leading-none tracking-tight">
                Skills
              </h2>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-white text-4xl md:text-5xl font-bold leading-none">
                  5+
                </span>
                <span className="text-zinc-400 text-sm md:text-base mb-1 leading-tight">
                  Years of
                  <br />
                  Experience
                </span>
              </div>
              <p className="text-zinc-600 text-xs md:text-sm mt-6 leading-relaxed max-w-[280px]">
                프론트엔드 개발부터 AI 통합까지
                <br />
                다양한 기술 스택을 실무에 적용했습니다.
              </p>
              <div className="mt-8 flex items-center gap-2">
                <div className="w-5 h-px bg-zinc-600" />
                <span className="text-zinc-600 text-xs tracking-widest uppercase">
                  scroll
                </span>
                <div className="w-5 h-px bg-zinc-600" />
              </div>
            </div>

            {/* Skill cards */}
            {skillCategories.map((category) => (
              <article
                key={category.title}
                data-skills-card
                data-parallax-speed={category.parallaxSpeed}
                className="relative overflow-hidden w-[78vw] max-w-[380px] min-h-[62vh] rounded-2xl border border-white/[0.07] bg-zinc-950/70 backdrop-blur-sm px-4 py-5 md:px-5 md:py-6 shrink-0"
                style={{
                  marginTop: `${category.yOffset}px`,
                  marginLeft: `${category.xGap}px`,
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${category.gradientFrom}, ${category.gradientTo})`,
                  }}
                />

                {/* Subtle glow behind top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-28 opacity-[0.06] rounded-t-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(180deg, ${category.gradientFrom}, transparent)`,
                  }}
                />

                {/* Category header */}
                <div className="relative flex items-center justify-between mb-4">
                  <h3
                    className="text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{
                      background: `linear-gradient(90deg, ${category.gradientFrom}, ${category.gradientTo})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {category.title}
                  </h3>
                  <span className="text-[10px] text-zinc-600 font-mono">
                    {category.items.length} skills
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-4 opacity-20"
                  style={{
                    background: `linear-gradient(90deg, ${category.gradientFrom}55, transparent)`,
                  }}
                />

                {/* Skill items */}
                <ul className="space-y-1">
                  {category.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-white/4 transition-colors duration-200"
                    >
                      <SkillIcon skill={skill} />
                      <div className="min-w-0 flex-1">
                        <p className="text-zinc-100 text-sm font-medium leading-tight">
                          {skill.name}
                        </p>
                        <p className="text-zinc-500 text-[11px] mt-0.5 leading-tight truncate">
                          {skill.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
