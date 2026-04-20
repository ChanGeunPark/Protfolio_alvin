"use client";
import AlvinBadge from "@/components/common/badge/alvinBadge";

function Career() {
  const careerData = [
    {
      company: "(주)오지",
      tags: ["2022.09 ~ 2026.02", "프론트엔드", "클라이언트"],
      description:
        "스타트업에서 프로젝트를 처음부터 끝까지 만들고 운영하면서 프론트엔드 구조 설계, 상태 관리, API 연동, 실서비스 운영 경험을 깊게 쌓았습니다. AI 캐릭터 채팅 시스템을 도입하여 일 10만 회 이상의 대화 요청을 안정적으로 처리했습니다.",
    },
    {
      company: "(주)에듀에듀",
      tags: ["2020.10 ~ 2022.06", "풀스택", "디자인"],
      description:
        "교육 플랫폼과 서비스 구축 과정에서 기획, 디자인, 퍼블리싱, 프론트엔드, 데이터베이스 설정까지 경험하며 비즈니스 전반의 개발 플로우를 익혔습니다.",
    },
    {
      company: "이젠아카데미 (교육)",
      tags: ["2020.01 ~ 2020.06", "UI/UX 웹디자인", "웹퍼블리셔", "교육"],
      description: `UI/UX 웹디자인(웹퍼블리셔) 과정을 통해 사용자 리서치,
              와이어프레임/프로토타입 제작, 사용성 테스트를 기반으로 한 화면
              설계 역량을 익혔고, 웹 퍼블리싱과 Bootstrap 기반 반응형 UI
              구현까지 경험하며 프론트엔드 실무 기초를 체계적으로 쌓았습니다.`,
    },
    {
      company: "(주)교원",
      tags: ["2017.04 ~ 2017.06", "디자이너", "인턴"],
      description:
        "아동 교육 플랫폼 콘텐츠를 디자인하며 사용자 연령대에 맞는 시각 구성과 정보 전달 구조를 설계했고, 이후 퍼블리싱/프론트엔드로 확장할 수 있는 UI 기초 역량을 다졌습니다.",
    },
  ];

  return (
    <section id="experience" className="relative py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-white text-2xl font-bold">커리어</h2>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-30 mt-4">
          {careerData.map((career) => (
            <div key={career.company} className="text-zinc-100 relative z-10">
              <h3 className="font-bold text-lg mb-4 text-approveSub">
                {career.company}
              </h3>
              <p className="opacity-80 leading-relaxed">{career.description}</p>
              <div className="flex gap-2 mt-4">
                {career.tags.map((tag) => (
                  <AlvinBadge key={tag} BadgeStyle="BLACK" BadgeSize="SMALL">
                    {tag}
                  </AlvinBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Career;
