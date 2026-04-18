"use client";

import Image from "next/image";
import { useProjectSceneMotion } from "./hooks/useProjectSceneMotion";
import ProjectIntroScene from "./projectIntroScene";
import { getStreamEmbedUrl } from "@/lib/utils";

type ProjectItem = {
  organization: "OG" | "에듀에듀";
  title: string;
  oneLine: string;
  role: string;
  contributions: string[];
  achievements: string[];
  tech: string[];
  imageHint: string;
  videoUrl: string | null;
  imageUrl: string | null;
};

const allProjects: ProjectItem[] = [
  {
    organization: "OG",
    title: "CHIZU COMICS",
    oneLine: "AI 캐릭터 채팅과 인터랙티브 웹툰 경험을 결합한 플랫폼",
    role: "프론트엔드 메인 개발자",
    contributions: [
      "프론트엔드 구조 설계 및 개발",
      "AI 캐릭터 채팅 기능 기획 및 구현",
      "GraphQL Codegen 및 도메인별 커스텀 훅 패턴 정리",
      "Zustand 기반 전역 상태 구조 정리",
      "FCM 웹 푸시, 결제, 관리자 기능 연계",
      "Flutter로 웹앱화하여 스토어 배포",
    ],
    achievements: [
      "시리즈/에피소드/투표/커뮤니티 흐름을 하나의 사용자 경험으로 통합",
      "LangChain + Azure OpenAI 기반 캐릭터 채팅 기능 구현",
      "채팅방 생성/저장/불러오기/토큰 차감 및 충전 흐름 구축",
      "일 10만 회 이상의 AI 채팅 요청이 발생하는 서비스 운영",
      "GraphQL Codegen 기반 생산성과 타입 안정성 향상",
      "상태 구조 정리로 페이지 간 일관성과 유지보수성 개선",
    ],
    tech: [
      "Next.js 13",
      "React 18",
      "TypeScript",
      "Flutter",
      "Apollo Client",
      "GraphQL",
      "Zustand",
      "Tailwind CSS",
      "NextAuth",
      "Firebase FCM",
      "LangChain",
      "Azure OpenAI",
      "TossPayments SDK",
      "PM2",
      "GCP",
    ],
    imageHint: "CHIZU COMICS 대표 화면 이미지",
    videoUrl:
      "https://iframe.videodelivery.net/e311c4b8b0ef0347e3c8718df1041e08",
    imageUrl: null,
  },
  {
    organization: "OG",
    title: "CHIZU",
    oneLine: "Web3 NFT 마켓플레이스 핵심 화면과 데이터 흐름 구축",
    role: "프론트엔드 메인 개발자",
    contributions: [
      "Next.js/TypeScript 기반 핵심 화면 설계 및 구현",
      "GraphQL(Apollo) 연동으로 데이터 조회/업데이트 흐름 안정화",
      "NFT 생성/컬렉션 배포/거래(Buy Now, Offer, Bid, Settle) 플로우 구현",
      "Socket.IO 실시간 알림, 필터/검색, 무한 스크롤 기반 탐색 경험 고도화",
    ],
    achievements: [
      "기반 서비스의 핵심 화면을 구현하여 일정 내 출시",
      "GraphQL(Apollo) 연동 구조를 정리해 데이터 조회/업데이트 흐름을 안정화하고 화면 응답 경험 개선",
      "파일 업로드, 실시간/비동기 처리 등 사용자 기능을 일관된 UX로 제공",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Apollo Client",
      "Zustand",
      "NextAuth",
      "Socket.IO Client",
      "Framer Motion",
    ],
    imageHint: "CHIZU 핵심 화면 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/1dac75f3-68e9-4915-e9d2-67589ec1b100/public",
  },
  {
    organization: "OG",
    title: "냥빵냥빵 두근두근 냥빵",
    oneLine:
      "인터랙션 중심 화면과 클라이언트 구조를 설계하고 성능을 개선한 사용자 경험 프로젝트",
    role: "클라이언트 아키텍처 설계 및 프론트엔드 인터랙션 개발",
    contributions: [
      "컴포넌트 단위 인터랙션/모션 구조 설계",
      "기능 단위 상태 흐름 및 화면 전환 로직 설계",
      "렌더링 비용 절감을 위한 성능 최적화",
      "사용자 행동 기반 연출 및 피드백 UX 구현",
    ],
    achievements: [
      "상태 기반 UI 인터랙션/모션 20종 이상 구현",
      "렌더링 호출 최적화로 그래픽 처리 비용 49% 감소",
      "초기 데이터 로딩 체감 속도 3배 향상",
      "출시 이후 라이브 운영 환경에서 안정적으로 기능 개선",
      "누적 2만 다운로드 이상의 사용자 접점 확보",
    ],
    tech: ["Unity", "C#", "DOTween", "UniTask", "Addressables", "Firebase"],
    imageHint: "게임 UI/연출 화면 이미지",
    videoUrl:
      "https://iframe.videodelivery.net/dfb40045f4086d15b9898dce60a7757f",
    imageUrl: null,
  },
  {
    organization: "에듀에듀",
    title: "에듀에듀 메인 사이트",
    oneLine: "클래스 개설과 운영 흐름을 반영한 메인 서비스 사이트",
    role: "클래스 개설 기능, 데이터베이스 설정, 디자인, 퍼블리싱, 프론트엔드 개발 담당",
    contributions: [
      "재능기부 클래스를 등록하고 운영할 수 있는 구조 설계",
      "화면 디자인부터 퍼블리싱, 프론트엔드 개발까지 수행",
    ],
    achievements: [
      "서비스 운영에 필요한 핵심 기능 구현",
      "사용자 관점의 클래스 개설 흐름을 반영해 완성도 향상",
    ],
    tech: ["DB 설계 및 설정", "웹 퍼블리싱", "프론트엔드 개발"],
    imageHint: "에듀에듀 메인 사이트 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/cc4ebe9e-a270-4af0-2e59-e17521917c00/public",
  },
  {
    organization: "에듀에듀",
    title: "에듀키즈",
    oneLine: "유치원·어린이집 대상 홈페이지 플랫폼 구축 프로젝트",
    role: "디자인, 퍼블리싱, 프론트엔드 개발 및 일부 데이터 연동 담당",
    contributions: [
      "디자인/퍼블리싱/프론트 개발 전반 담당",
      "개설신청서 기능의 DB 설계 및 연동",
    ],
    achievements: [
      "단순 홍보형 사이트를 운영 기능 포함 플랫폼으로 확장",
      "개설 신청 기능으로 서비스 완성도 향상",
    ],
    tech: ["DB 연동", "웹 퍼블리싱", "프론트엔드 개발"],
    imageHint: "에듀키즈 플랫폼 화면 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/d3bce1bb-1dc2-47e2-09c4-2b2af2340e00/public",
  },
  {
    organization: "에듀에듀",
    title: "ANDNEW",
    oneLine: "작품 구매 및 대여가 가능한 쇼핑몰 서비스",
    role: "디자인, 퍼블리싱, 프론트엔드 개발, 데이터 연동 담당",
    contributions: [
      "페이지 디자인/퍼블리싱 및 데이터 구조 연동",
      "구매/대여 흐름의 화면 UX 구성",
    ],
    achievements: [
      "판매와 렌트 기능이 가능한 서비스 구조 구현",
      "상품 전시와 구매 흐름을 고려한 사용자 화면 구성",
    ],
    tech: ["DB 설계", "웹 퍼블리싱", "프론트엔드 개발"],
    imageHint: "ANDNEW 쇼핑몰 화면 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/4afacb8d-94b7-4580-0ce1-336858d8a900/public",
  },

  {
    organization: "에듀에듀",
    title: "Wekeep",
    oneLine: "웹 명함 제작과 화상상담 기능 제공 서비스",
    role: "전반적인 디자인, 퍼블리싱, 프론트엔드 개발 담당",
    contributions: [
      "웹 명함 제작/화상상담 기능의 UI 설계 및 구현",
      "퍼블리싱과 프론트 기능 통합 개발",
    ],
    achievements: [
      "핵심 기능을 사용자 흐름에 맞게 구현",
      "서비스 이용 편의성과 완성도 향상",
    ],
    tech: ["PHP", "UI/UX 설계", "웹 퍼블리싱", "프론트엔드 개발"],
    imageHint: "Wekeep 서비스 화면 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/b05bbd8c-bcf2-44d5-8b1d-5872bd57d400/public",
  },
  {
    organization: "에듀에듀",
    title: "퀵클래스 재능기부 사이트",
    oneLine: "클래스 개설 및 운영 중심의 재능기부 플랫폼",
    role: "클래스 개설 기능, 데이터베이스 설정, 디자인, 퍼블리싱, 프론트엔드 개발 담당",
    contributions: [
      "재능기부 클래스를 등록하고 운영할 수 있는 서비스 구조 설계",
      "디자인부터 퍼블리싱, 프론트엔드 구현까지 전반 수행",
    ],
    achievements: [
      "클래스 등록/관리 가능한 핵심 운영 기능 마련",
      "사용자 흐름 기반 UI로 이용 편의성과 완성도 향상",
    ],
    tech: ["DB 설계 및 설정", "웹 퍼블리싱", "프론트엔드 개발"],
    imageHint: "퀵클래스 서비스 화면 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/f196c7b7-0c09-40d0-df24-49161c927c00/public",
  },
];

function Project() {
  useProjectSceneMotion();

  return (
    <section data-project-section className="relative min-h-screen md:py-28">
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
