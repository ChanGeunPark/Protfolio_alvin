export type CareerItem = {
  company: string;
  period: string;
  tags: string[];
  description: string;
};

export const careerData: CareerItem[] = [
  {
    company: "(주)오지",
    period: "2022.09 ~ 2026.02",
    tags: ["프론트엔드", "클라이언트"],
    description:
      "웹 마켓플레이스와 웹툰/AI 채팅 2개 제품의 프론트엔드를 연속 담당한 뒤 Unity 게임 클라이언트까지 도메인을 확장했습니다. 4인 개발팀에서 클라이언트 아키텍처, 데이터 페칭 전략, 보안/배포 기준을 직접 정의하고 기획·디자인·백엔드와 함께 라이브 운영까지 끌고 갔습니다.",
  },
  {
    company: "(주)에듀에듀",
    period: "2020.10 ~ 2022.06",
    tags: ["풀스택", "디자인"],
    description:
      "퍼블리셔로 입사해 PHP·MySQL까지 영역을 확장했습니다. 학원·기업 납품용 B2B 화상채팅 플랫폼의 사용자 플로우 전반을 구현하고 기존 어드민 베이스 위에 운영 기능을 확장했으며, 화상채팅 코어를 Wekeep·QuickClass 같은 응용 서비스로 재활용했습니다.",
  },
  {
    company: "이젠아카데미 (교육)",
    period: "2020.01 ~ 2020.06",
    tags: ["UX/UI 퍼블리싱 과정", "교육"],
    description: `HTML·CSS·JavaScript 기반 웹 퍼블리싱 및 반응형 UI 구현 과정 수료. 화면 설계부터 프론트엔드 구현까지 실무 기초를 습득하며 개발 커리어를 시작했습니다.`,
  },
  {
    company: "(주)교원",
    period: "2017.04 ~ 2017.06",
    tags: ["디자이너", "인턴"],
    description:
      "아동 교육 플랫폼 콘텐츠를 디자인하며 사용자 연령대에 맞는 시각 구성과 정보 전달 구조를 설계했고, 이후 퍼블리싱/프론트엔드로 확장할 수 있는 UI 기초 역량을 다졌습니다.",
  },
];
