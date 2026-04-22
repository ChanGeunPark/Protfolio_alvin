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
  highlights: string[];
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
    highlights: [
      "프론트엔드 전반 90% 담당 및 Pages Router 기반 앱 구조 설계",
      "SSR/ISR, Apollo 캐시, lazy query로 페이지 특성별 데이터 로딩 최적화",
      "누적 유저 1만 명, 피크 100건/초 AI 채팅 요청 서비스 운영",
      "GraphQL Codegen과 Zustand 도메인 스토어로 타입/상태 구조 정리",
      "Flutter로 웹앱화하여 스토어 배포",
    ],
    contributions: [
      "pages, components, lib 디렉터리 역할을 분리해 화면/도메인/인프라 레이어 구조 설계",
      "_app.tsx 앱 셸에서 PWA, SessionProvider, ApolloClientLayout, 네비게이션, 콘텐츠 레이아웃 조립",
      "AI 캐릭터 채팅 기능 기획 및 구현",
      "GraphQL Codegen 및 도메인별 Apollo 커스텀 훅 패턴 정리",
      "Zustand 기반 content, ui, user, notification 도메인 스토어 구조 정리",
      "NextSeo 기반 SEO 메타, next-sitemap, next/image 공통 이미지 컴포넌트 구성",
      "FCM 웹 푸시, 결제, 관리자 기능 연계",
      "Flutter로 웹앱화하여 스토어 배포",
    ],
    achievements: [
      "시리즈/에피소드/투표/커뮤니티 흐름을 하나의 사용자 경험으로 통합",
      "LangChain + Azure OpenAI 기반 캐릭터 채팅 기능 구현",
      "채팅방 생성/저장/불러오기/토큰 차감 및 충전 흐름 구축",
      "누적 유저 1만 명, 피크 100건/초 AI 채팅 요청이 발생하는 서비스 운영",
      "GraphQL Codegen 기반 gql 클라이언트 프리셋을 도입해 쿼리 타입 안정성과 생산성 향상",
      "세션/로컬 토큰 변화에 맞춰 Apollo 클라이언트를 갱신해 인증 상태와 API 클라이언트 동기화",
      "SSR과 ISR(revalidate)을 페이지 성격에 맞게 적용해 첫 페인트, SEO, 데이터 최신성 균형 확보",
      "page/count 기반 공통 그리드와 BrowseScroller 무한 스크롤로 목록 초기 로딩량 감소",
      "AI 피드 스크롤/데이터 보존을 Zustand 스토어로 관리해 화면 이동 후에도 탐색 맥락 유지",
      "next/script afterInteractive 전략과 next/image 기반 공통 ImageBox로 초기 로딩 비용 완화",
    ],
    tech: [
      "Next.js 13",
      "React 18",
      "TypeScript",
      "Flutter",
      "Apollo Client",
      "GraphQL",
      "GraphQL Codegen",
      "Zustand",
      "Tailwind CSS",
      "NextAuth",
      "NextSeo",
      "next-sitemap",
      "next-pwa",
      "Firebase FCM",
      "LangChain",
      "Azure OpenAI",
      "TossPayments SDK",
      "GCP",
    ],
    techReasons: [
      {
        tech: "Next.js 13 Pages Router",
        reason:
          "페이지별 SSR/ISR 전략을 적용해 에피소드, AI, 커뮤니티처럼 크롤러 대응과 초기 데이터가 중요한 화면을 유연하게 구성",
      },
      {
        tech: "GraphQL + Apollo Client",
        reason:
          "InMemoryCache, 인증/업로드 링크, lazy query, fetchPolicy를 조합해 인증 상태와 데이터 패칭 전략을 한 계층에서 관리",
      },
      {
        tech: "GraphQL Codegen",
        reason:
          "스키마와 문서 기반으로 gql 클라이언트 타입을 생성해 쿼리 작성 시 타입 안정성과 자동완성 경험을 확보",
      },
      {
        tech: "Zustand",
        reason:
          "AI 피드, 스크롤 위치, 사용자/알림/UI 상태처럼 페이지 간 보존이 필요한 클라이언트 상태를 도메인별로 가볍게 분리",
      },
      {
        tech: "NextSeo + next-sitemap",
        reason:
          "공유/검색 메타와 사이트맵 설정을 공통 모듈로 관리해 콘텐츠 페이지의 SEO 대응을 일관되게 유지",
      },
      {
        tech: "next/image + next/script",
        reason:
          "공통 ImageBox와 외부 이미지 도메인 설정으로 이미지 최적화 파이프라인을 활용하고, GA 스크립트는 afterInteractive로 초기 로딩 부담을 완화",
      },
      {
        tech: "Flutter",
        reason: "웹 코드베이스를 재활용해 iOS/Android 앱을 빠르게 스토어 배포",
      },
    ],
    devIssues: [
      {
        issue:
          "AI 캐릭터의 세계관(시스템 프롬프트)이 클라이언트↔서버 구간에서 평문으로 전달되면 네트워크 탭에서 프롬프트 내용이 그대로 노출되는 보안 문제",
        solution:
          "CryptoJS AES로 worldView를 암호화하여 전송하고, 서버(API Route)에서만 복호화하여 LangChain 프롬프트에 주입",
      },
      {
        issue:
          "인증 세션과 로컬 토큰 상태가 달라질 때 GraphQL 요청 헤더와 캐시 상태가 어긋날 수 있는 문제",
        solution:
          "ApolloClientLayout에서 세션/토큰 변화에 맞춰 클라이언트를 재구성해 인증 컨텍스트와 API 클라이언트를 동기화",
      },
      {
        issue:
          "AI 피드와 탐색 목록이 커질수록 첫 요청량과 화면 복귀 시 맥락 손실이 커지는 문제",
        solution:
          "QueryGridLayout의 count/page 페이지네이션, BrowseScroller 무한 스크롤, Zustand 기반 피드/스크롤 보존 구조로 필요한 시점에만 데이터를 누적 로드",
      },
      {
        issue:
          "콘텐츠 페이지마다 SEO 메타와 데이터 로딩 방식이 달라 중복 구현과 유지보수 비용이 커질 수 있는 문제",
        solution:
          "DefaultHead/CustomSeo와 next-sitemap 설정으로 SEO 레이어를 모듈화하고, SSR/ISR/lazy query 패턴을 페이지 성격에 맞게 분리",
      },
      // {
      //   issue:
      //     "PWA 설치/오프라인 대응 요구는 있었지만 빌드 환경에 따라 서비스 워커 활성화가 부담이 될 수 있는 문제",
      //   solution:
      //     "next-pwa, manifest, 서비스 워커 관련 설정 구조를 마련하되 next.config.js의 disable 플래그로 배포 시점에 토글 가능하게 구성",
      // },
    ],
    retrospective:
      "처음으로 단독 프론트엔드 개발자로 서비스 전체를 책임지며, 단순히 화면을 만드는 것보다 디렉터리 구조, Provider 레이어, 데이터 패칭 전략, SEO, 상태 보존 방식이 장기적인 운영 품질을 좌우한다는 것을 배웠습니다. 누적 유저 1만 명, 피크 100건/초 AI 채팅 요청이 발생하는 서비스를 운영하면서 SSR/ISR, Apollo 캐시, 무한 스크롤, Zustand 스토어 같은 선택들이 실제 사용자 경험과 유지보수성에 직접 연결된다는 점을 체감했습니다.",
    imageHint: "CHIZU COMICS 대표 화면 이미지",
    videoUrl:
      "https://iframe.videodelivery.net/e311c4b8b0ef0347e3c8718df1041e08",
    imageUrl: null,
  },
  {
    organization: "OG",
    title: "CHIZU",
    oneLine: "마켓플레이스 핵심 화면과 데이터 흐름 구축",
    role: "프론트엔드 개발자",
    period: "2022.09 ~ 2023.08",
    members:
      "프론트엔드 1명, 백엔드 1명, 디자이너 1명, 기획자 2명, 테크리드 1명, 블록체인개발 1명",
    contributionRate: "프론트엔드 전반 60%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    highlights: [
      "NFT 이미지 중심 서비스의 초기 로딩/네트워크 비용 최적화",
      "page/count 기반 GraphQL 페이지네이션과 무한 스크롤 구현",
      "업로드 전 클라이언트 이미지 리사이징으로 전송/저장 비용 절감",
      "이미지 비율 기반 Masonry 배치로 레이아웃 흔들림과 컬럼 쏠림 완화",
    ],
    contributions: [
      "Next.js/TypeScript 기반 핵심 화면 설계 및 구현",
      "GraphQL(Apollo) 연동으로 데이터 조회/업데이트 흐름 안정화",
      "NFT 생성/컬렉션 배포/거래(Buy Now, Offer, Bid, Settle) 플로우 구현",
      "Socket.IO 실시간 알림, 필터/검색, page/count 기반 무한 스크롤 탐색 경험 구현",
      "업로드 이미지의 클라이언트 리사이징 및 원격 이미지 최적화 설정 적용",
      "이미지 비율 기반 Masonry 카드 높이 계산과 컬럼 분산 로직 구현",
    ],
    achievements: [
      "기반 서비스의 핵심 화면을 구현하여 일정 내 출시",
      "GraphQL(Apollo) 연동 구조를 정리해 데이터 조회/업데이트 흐름을 안정화하고 화면 응답 경험 개선",
      "파일 업로드, 실시간/비동기 처리 등 사용자 기능을 일관된 UX로 제공",
      "업로드 전 canvas 기반 축소 이미지를 생성해 이미지 전송량과 저장 비용을 줄이는 구조 마련",
      "Browse/NFT 목록을 page/count 단위로 요청하고 화면 하단 진입 시 다음 페이지를 불러와 초기 로딩량 감소",
      "이미지 width/height 비율로 Masonry 카드 높이를 선점해 로딩 전후 layout shift 완화",
      "Apollo InMemoryCache와 홈 API 통합 요청 구조로 중복 네트워크 요청 비용 절감",
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
          "NFT 마켓플레이스의 복잡한 데이터 관계를 GraphQL로 효율적으로 다루고 InMemoryCache 기반 기본 캐싱 효과를 활용하기 위해 선택",
      },
      {
        tech: "Next.js Image",
        reason:
          "S3, Google Storage 등 외부 원격 이미지를 Next.js 이미지 최적화 파이프라인으로 처리하기 위해 도메인 설정과 함께 사용",
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
      {
        issue:
          "NFT/프로필/배너처럼 외부 원격 이미지가 많아 초기 로딩과 업로드 비용이 커질 수 있는 문제",
        solution:
          "next.config.js에 외부 이미지 도메인을 등록해 next/image 최적화를 적용하고, 업로드 전 canvas로 긴 변 500px 이하 축소본을 생성",
      },
      {
        issue:
          "NFT 목록 데이터와 이미지 카드가 많아 한 번에 렌더링하면 초기 요청량과 레이아웃 흔들림이 커지는 문제",
        solution:
          "GraphQL page/count 페이지네이션과 무한 스크롤로 필요한 시점에만 데이터를 추가 로드하고, 이미지 비율 기반 높이 계산으로 Masonry layout shift를 완화",
      },
    ],
    retrospective:
      "NFT 이미지가 많은 서비스였기 때문에 초기 렌더링과 네트워크 비용을 줄이는 방향에 집중했습니다. 업로드 전 이미지 리사이징, page/count 기반 목록 요청, 무한 스크롤, Masonry 높이 선점 등을 적용하며 성능 최적화가 사용자 탐색 경험의 밀도와 안정성에 직접 연결된다는 것을 배웠습니다.",
    imageHint: "CHIZU 핵심 화면 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/1dac75f3-68e9-4915-e9d2-67589ec1b100/public",
  },
  {
    organization: "OG",
    title: "냥빵냥빵두근두근냥빵",
    oneLine:
      "카페 경영 시뮬레이션 게임의 클라이언트 전반을 담당하며 인터랙션과 성능을 함께 개선한 프로젝트",
    role: "클라이언트 전반 — 인터랙션 설계, 시스템 구현, 성능 최적화",
    period: "2024.11 ~ 2026.02",
    members: "클라이언트 개발 1명, 서버 개발 1명, 디자이너 1명, 기획자 1명",
    contributionRate: "클라이언트 전반 90%",
    imageHint: "냥빵냥빵두근두근냥빵 화면 이미지",
    isLive: true,
    highlights: [
      "그래픽 처리 비용 49% 감소",
      "데이터 로드 속도 2.67배 향상 (6.3ms → 2.4ms)",
      "상태 기반 UI 인터랙션/모션 20종 이상 구현",
      "누적 2만 다운로드 라이브 운영",
    ],
    contributions: [
      "가챠/스킬/레벨업/리워드 등 20종 이상의 UI 인터랙션/모션 설계 및 구현",
      "카페 손님 AI State Machine 설계 — 조리→서빙→청소→설거지 순환 흐름을 상태 단위로 분리",
      "Observer 패턴 기반 자동 UI 업데이트 시스템 구현 — 데이터 변경 시 관련 화면 자동 갱신",
      "SpriteAtlas 분류, Material 공용화, 카메라 제어로 드로우콜 최적화",
      "MessagePack 직렬화 도입으로 데이터 로드 속도 2.67배 향상, 저장 용량 55% 절감",
      "NavMesh 비동기 베이킹 + EditMode 플래그로 오브젝트 배치/삭제 시 프레임 드롭 해결",
      "Sprite 자동화 에디터, ScriptableObject 관리 에디터 제작으로 작업 시간 60% 단축",
    ],
    achievements: [
      "애니메이션 큐잉 시스템으로 렌더링 비용 49% 절감",
      "MessagePack 직렬화 도입으로 데이터 로드 속도 2.67배 향상 (6.3ms → 2.4ms), 저장 용량 55% 절감",
      "Observer 패턴으로 데이터-UI 간 느슨한 결합 구현 — 수동 갱신 로직 제거로 버그 감소",
      "상태 기반 자동화 시스템 설계",
      "비동기 처리로 프레임 드롭 제거",
      "쿨타운 기반 Flip 시스템으로 NPC 애니메이션 부하 50% 감소 및 떨림 현상 제거",
      "누적 2만 다운로드 라이브 운영",
    ],
    tech: [
      "Unity",
      "C#",
      "DOTween",
      "UniTask",
      "Addressables",
      "MessagePack",
      "Firebase",
      "NavMesh",
    ],
    techReasons: [
      {
        tech: "DOTween",
        reason:
          "복잡한 인터랙션 시퀀스를 선언적으로 구성하고, Sequence로 애니메이션 타이밍을 정밀하게 제어하기 위해 선택",
      },
      {
        tech: "UniTask",
        reason:
          "async/await 패턴으로 비동기 로직을 간결하게 작성하고, NavMesh 베이킹 같은 heavy 작업을 Unity 생명주기와 안전하게 연계",
      },
      {
        tech: "Addressables",
        reason:
          "에셋 번들 동적 로딩으로 초기 로딩 시간 단축 및 메모리 사용량 최적화",
      },
      {
        tech: "MessagePack",
        reason:
          "JSON 대비 빠른 바이너리 직렬화로 모바일 환경의 데이터 로드/저장 성능을 실측 기반으로 개선",
      },
    ],
    devIssues: [
      {
        issue:
          "가챠/스킬/UI 등 다수의 애니메이션이 동시에 실행될 때 프레임 드롭 발생",
        solution:
          "DOTween Sequence로 애니메이션 큐잉하고 불필요한 렌더링 호출 제거 → 그래픽 처리 비용 49% 절감",
      },
      {
        issue:
          "오브젝트 배치/삭제 시마다 NavMesh 베이킹으로 프레임 드롭 발생, 오브젝트가 많을수록 심화",
        solution:
          "EditMode 플래그로 편집 종료 시 한 번만 베이킹하도록 변경 + UniTask로 비동기 처리 적용",
      },
      {
        issue:
          "8가지 상태/방향별 NPC 애니메이션으로 Update 부하 증가, 빈번한 좌우 반전으로 떨림 현상 발생",
        solution:
          "이전 상태 캐싱으로 변경 시에만 애니메이션 재생 + 쿨타운 기반 Flip 시스템으로 부하 50% 감소 및 떨림 제거",
      },
      {
        issue: "실시간 조명/그림자 계산으로 모바일에서 성능 저하",
        solution:
          "URP Lit → PostProcessing + Sprite Material 방식으로 전환, 시각 품질은 유지하면서 드로우콜 급증 방지",
      },
    ],
    retrospective:
      "이 프로젝트에서 배운 건 '설계 먼저, 구현은 그 다음'이라는 원칙입니다. 초반에 빠르게 만들고 나중에 고치자는 방식으로 접근했다가 기술 부채가 쌓이는 걸 직접 경험했고, 이후로는 코드를 작성하기 전에 전체 흐름을 먼저 설계하는 습관이 생겼습니다. 또한 짧은 프레임 드롭조차 유저에게는 불쾌한 경험이 된다는 걸 수치로 확인하면서, 성능 최적화가 기술적 목표가 아니라 사용자 경험의 문제라는 걸 체감했습니다. 플랫폼이 달라도 문제를 구조로 푸는 방식은 같았습니다.",
    videoUrl:
      "https://iframe.videodelivery.net/dfb40045f4086d15b9898dce60a7757f",
    imageUrl: null,
  },
  {
    organization: "에듀에듀",
    title: "에듀키즈",
    oneLine: "유치원·어린이집 대상 홈페이지 플랫폼 구축 프로젝트",
    role: "디자인, 퍼블리싱, 프론트엔드 개발 및 데이터 연동 담당",
    members: "개발 2명, 기획 1명",
    contributionRate: "프론트엔드 전반 90%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    highlights: [
      "유치원·어린이집 홈페이지 플랫폼 구축",
      "프론트엔드 전반 90% 담당",
      "개설신청서 입력 → DB 저장 → 관리자 조회 흐름 설계 및 구현",
    ],
    contributions: [
      "디자인/퍼블리싱/프론트 개발 전반 담당",
      "개설신청서 기능의 MySQL 테이블 설계 및 PHP 서버 연동",
    ],
    achievements: [
      "단순 홍보 페이지를 개설 신청·관리 기능이 포함된 멀티 페이지 플랫폼으로 확장",
      "개설신청서 입력 → MySQL 저장 → 관리자 조회 흐름을 직접 설계하고 PHP로 구현",
      "기관별 맞춤 홈페이지 구성이 가능한 섹션 단위 UI 구조 설계",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "jQuery",
      "PHP",
      "MySQL",
    ],
    retrospective:
      "단순 홍보 사이트를 넘어 실제 운영 기능을 갖춘 플랫폼으로 발전시키면서 서비스 확장성에 대한 고민을 시작했습니다.",
    imageHint: "에듀키즈 플랫폼 화면 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/d3bce1bb-1dc2-47e2-09c4-2b2af2340e00/public",
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
    highlights: [
      "웹 명함 제작과 화상상담 기능 UI 구현",
      "프론트엔드 전반 90% 담당",
      "PHP 기반 환경에서 퍼블리싱과 서버 연동 단독 완성",
    ],
    contributions: [
      "웹 명함 제작/화상상담 기능의 UI 설계 및 구현",
      "PHP 서버 연동 및 MySQL 기반 데이터 저장 구조 구현",
    ],
    achievements: [
      "웹 명함 입력 → 미리보기 → 저장 흐름을 단일 페이지 UI로 구현",
      "화상상담 예약·진입 흐름을 UI로 설계하고 PHP 서버 연동까지 완성",
      "PHP 기반 환경에서 디자인·퍼블리싱·서버 연동을 단독으로 전담",
    ],
    tech: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "jQuery",
      "MySQL",
    ],
    retrospective:
      "PHP 기반 환경에서 작업하며 기술 스택보다 사용자 흐름 설계가 더 중요하다는 것을 다시 한 번 확인했습니다.",
    imageHint: "Wekeep 서비스 화면 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/b05bbd8c-bcf2-44d5-8b1d-5872bd57d400/public",
  },
];
