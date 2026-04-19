export type TechReason = {
  tech: string;
  reason: string;
};

export type DevIssue = {
  issue: string;
  solution: string;
};

export type ProjectItem = {
  organization: "OG" | "에듀에듀";
  title: string;
  oneLine: string;
  role: string;
  period?: string;
  members?: string;
  contributionRate?: string;
  isLive?: boolean;
  siteUrl?: string;
  githubUrl?: string;
  contributions: string[];
  achievements: string[];
  tech: string[];
  techReasons?: TechReason[];
  devIssues?: DevIssue[];
  retrospective?: string;
  imageHint: string;
  videoUrl: string | null;
  imageUrl: string | null;
};

export const allProjects: ProjectItem[] = [
  {
    organization: "OG",
    title: "CHIZU COMICS",
    oneLine: "AI 캐릭터 채팅과 인터랙티브 웹툰 경험을 결합한 플랫폼",
    role: "프론트엔드 개발자",
    period: "2023.09 ~ 2024.10",
    members: "프론트엔드 1명, 백엔드 1명, 디자이너 1명, 기획자 1명",
    contributionRate: "프론트엔드 전반 90%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
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
    techReasons: [
      {
        tech: "Next.js 13",
        reason:
          "SSR/SSG를 통한 SEO 최적화와 App Router 기반 파일 시스템 라우팅으로 개발 생산성 향상",
      },
      {
        tech: "GraphQL + Apollo Client",
        reason:
          "백엔드와의 타입 안정성 확보 및 필요한 데이터만 요청하는 효율적인 데이터 패칭",
      },
      {
        tech: "Zustand",
        reason:
          "Redux 대비 보일러플레이트가 적고, 컴포넌트 외부에서도 상태 접근이 용이해 채팅 상태 관리에 적합",
      },
      {
        tech: "Flutter",
        reason: "웹 코드베이스를 재활용해 iOS/Android 앱을 빠르게 스토어 배포",
      },
    ],
    devIssues: [
      {
        issue: "AI 채팅 스트리밍 응답 중 UI가 멈추거나 깜빡이는 현상 발생",
        solution:
          "ReadableStream을 청크 단위로 처리하고, React 상태 업데이트를 requestAnimationFrame으로 배치 처리하여 렌더링 안정화",
      },
      {
        issue: "GraphQL Codegen 타입 자동 생성 시 빌드 시간이 길어지는 문제",
        solution:
          "watch 모드와 캐싱 전략을 조합하고 변경된 파일만 재생성하도록 설정 분리",
      },
    ],
    retrospective:
      "처음으로 단독 프론트엔드 개발자로 서비스 전체를 책임지며, 설계 결정 하나하나가 실제 사용자 경험에 직결된다는 것을 체감했습니다. 일 10만 건의 AI 요청을 안정적으로 처리하면서 성능 최적화와 견고한 상태 관리의 중요성을 깊이 이해하게 되었습니다.",
    imageHint: "CHIZU COMICS 대표 화면 이미지",
    videoUrl:
      "https://iframe.videodelivery.net/e311c4b8b0ef0347e3c8718df1041e08",
    imageUrl: null,
  },
  {
    organization: "OG",
    title: "CHIZU",
    oneLine: "Web3 NFT 마켓플레이스 핵심 화면과 데이터 흐름 구축",
    role: "프론트엔드 개발자",
    period: "2022.09 ~ 2023.08",
    members:
      "프론트엔드 1명, 백엔드 1명, 디자이너 1명, 기획자 2명, 테크리더 1명, 블록체인개발 1명",
    contributionRate: "프론트엔드 전반 100%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
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
    techReasons: [
      {
        tech: "Apollo Client",
        reason:
          "NFT 마켓플레이스의 복잡한 데이터 관계를 GraphQL로 효율적으로 다루기 위해 선택",
      },
      {
        tech: "Socket.IO Client",
        reason: "입찰/낙찰/알림 등 실시간 이벤트 처리를 위한 양방향 통신",
      },
      {
        tech: "Framer Motion",
        reason:
          "NFT 카드 트랜지션과 마켓플레이스 인터랙션에 자연스러운 애니메이션 적용",
      },
    ],
    devIssues: [
      {
        issue:
          "실시간 Socket.IO 이벤트와 Apollo Cache 상태가 충돌하여 UI 불일치 발생",
        solution:
          "소켓 이벤트 수신 시 Apollo cache.modify를 통해 캐시를 직접 업데이트하여 일관성 유지",
      },
    ],
    retrospective:
      "Web3 개념과 NFT 거래 플로우를 처음 접하면서 도메인 이해가 개발 품질에 얼마나 중요한지 알게 되었습니다. 복잡한 트랜잭션 흐름을 사용자 친화적인 UI로 풀어내는 과정이 흥미로웠습니다.",
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
    period: "2024.11 ~ 2026.02",
    members: "클라이언트 개발 1명, 서버 개발 1명, 디자이너 1명, 기획자 1명",
    contributionRate: "클라이언트 전반 90%",
    isLive: true,
    siteUrl: undefined,
    githubUrl: undefined,
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
    techReasons: [
      {
        tech: "DOTween",
        reason:
          "Unity 환경에서 풍부한 인터랙션 애니메이션을 선언적으로 구성하기 위해 선택",
      },
      {
        tech: "UniTask",
        reason:
          "async/await 패턴으로 비동기 로직을 간결하게 작성하고 Unity 생명주기와 안전하게 연계",
      },
      {
        tech: "Addressables",
        reason:
          "에셋 번들 동적 로딩으로 초기 로딩 시간을 단축하고 메모리 사용량 최적화",
      },
    ],
    devIssues: [
      {
        issue: "다수의 애니메이션이 동시에 실행될 때 프레임 드롭 발생",
        solution:
          "DOTween Sequence를 활용한 애니메이션 큐잉과 불필요한 Update 호출 제거로 렌더링 비용 49% 절감",
      },
      {
        issue: "Addressables 에셋 로딩 시 체감 대기시간이 길어 UX 저하",
        solution:
          "백그라운드 프리로딩 전략을 구현하고 로딩 인디케이터와 결합하여 체감 속도 3배 개선",
      },
    ],
    retrospective:
      "게임 클라이언트 개발을 통해 성능 최적화의 수치적 개선이 실제 사용자 경험으로 이어지는 것을 직접 확인했습니다. 2만 다운로드라는 결과가 기술적 노력의 의미를 실감하게 해주었습니다.",
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
    members: "개발 2명, 기획 1명",
    contributionRate: "프론트엔드 및 DB 설계 80%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    contributions: [
      "재능기부 클래스를 등록하고 운영할 수 있는 구조 설계",
      "화면 디자인부터 퍼블리싱, 프론트엔드 개발까지 수행",
    ],
    achievements: [
      "서비스 운영에 필요한 핵심 기능 구현",
      "사용자 관점의 클래스 개설 흐름을 반영해 완성도 향상",
    ],
    tech: ["DB 설계 및 설정", "웹 퍼블리싱", "프론트엔드 개발"],
    retrospective:
      "초기 서비스 기획부터 개발까지 전 과정에 참여하면서 사용자 흐름 설계의 중요성을 배웠습니다.",
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
    members: "개발 2명, 기획 1명",
    contributionRate: "프론트엔드 전반 90%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    contributions: [
      "디자인/퍼블리싱/프론트 개발 전반 담당",
      "개설신청서 기능의 DB 설계 및 연동",
    ],
    achievements: [
      "단순 홍보형 사이트를 운영 기능 포함 플랫폼으로 확장",
      "개설 신청 기능으로 서비스 완성도 향상",
    ],
    tech: ["DB 연동", "웹 퍼블리싱", "프론트엔드 개발"],
    retrospective:
      "단순 홍보 사이트를 넘어 실제 운영 기능을 갖춘 플랫폼으로 발전시키면서 서비스 확장성에 대한 고민을 시작했습니다.",
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
    members: "개발 2명, 기획 1명",
    contributionRate: "프론트엔드 전반 90%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    contributions: [
      "페이지 디자인/퍼블리싱 및 데이터 구조 연동",
      "구매/대여 흐름의 화면 UX 구성",
    ],
    achievements: [
      "판매와 렌트 기능이 가능한 서비스 구조 구현",
      "상품 전시와 구매 흐름을 고려한 사용자 화면 구성",
    ],
    tech: ["DB 설계", "웹 퍼블리싱", "프론트엔드 개발"],
    retrospective:
      "쇼핑몰 서비스의 구매/대여 두 가지 흐름을 하나의 UI로 통합하면서 일관성 있는 UX 설계의 어려움과 중요성을 배웠습니다.",
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
    members: "개발 2명, 기획 1명",
    contributionRate: "프론트엔드 전반 90%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    contributions: [
      "웹 명함 제작/화상상담 기능의 UI 설계 및 구현",
      "퍼블리싱과 프론트 기능 통합 개발",
    ],
    achievements: [
      "핵심 기능을 사용자 흐름에 맞게 구현",
      "서비스 이용 편의성과 완성도 향상",
    ],
    tech: ["PHP", "UI/UX 설계", "웹 퍼블리싱", "프론트엔드 개발"],
    retrospective:
      "PHP 기반 환경에서 작업하며 기술 스택보다 사용자 흐름 설계가 더 중요하다는 것을 다시 한 번 확인했습니다.",
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
    members: "개발 2명, 기획 1명",
    contributionRate: "프론트엔드 전반 80%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    contributions: [
      "재능기부 클래스를 등록하고 운영할 수 있는 서비스 구조 설계",
      "디자인부터 퍼블리싱, 프론트엔드 구현까지 전반 수행",
    ],
    achievements: [
      "클래스 등록/관리 가능한 핵심 운영 기능 마련",
      "사용자 흐름 기반 UI로 이용 편의성과 완성도 향상",
    ],
    tech: ["DB 설계 및 설정", "웹 퍼블리싱", "프론트엔드 개발"],
    retrospective:
      "개발 커리어 초기에 맡은 프로젝트로, 기획부터 배포까지 전 과정을 경험하며 개발자로서의 기초를 다진 프로젝트입니다.",
    imageHint: "퀵클래스 서비스 화면 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/f196c7b7-0c09-40d0-df24-49161c927c00/public",
  },
];
