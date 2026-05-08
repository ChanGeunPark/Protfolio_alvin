export type TechReason = {
  tech: string;
  reason: string;
};

export type DevIssue = {
  issue: string;
  solution: string;
};

export type ProjectItem = {
  organization: "OG" | "에듀에듀" | "Personal";
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
    contributionRate: "프론트엔드 전반 80%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    highlights: [
      "프론트엔드 전반 80% 담당 및 Pages Router 기반 앱 구조 설계",
      "SSR/ISR, Apollo 캐시, lazy query로 페이지 특성별 데이터 로딩 최적화",
      "누적 유저 1만 명, 피크 100건/초 AI 채팅 요청 서비스 운영",
      "BFF 기반 시스템 프롬프트/외부 시크릿 격리 및 AI 인스턴스 수명 관리",
      "GraphQL Codegen과 Zustand 도메인 스토어로 타입/상태 구조 정리",
      "Flutter WebView 래핑과 Web-Native 브리지로 iOS/Android 동시 배포",
    ],
    contributions: [
      "pages, components, lib 디렉터리 역할을 분리해 화면/도메인/인프라 레이어 구조 설계",
      "_app.tsx 앱 셸에서 PWA, SessionProvider, ApolloClientLayout, 네비게이션, 콘텐츠 레이아웃 조립",
      "AI 캐릭터 채팅 기능 기획 및 구현",
      "Next.js API Route(BFF)에서 worldView를 조회해 클라이언트에 시스템 프롬프트가 노출되지 않는 구조로 전환",
      "채팅방 단위 LangChain 인스턴스 풀링과 12시간 TTL 자동 폐기 정책 설계",
      "AI 피드 목록/스크롤 위치를 sessionStorage와 수동 scrollRestoration으로 복원",
      "GraphQL Codegen 및 도메인별 Apollo 커스텀 훅 패턴 정리",
      "Zustand 기반 content, ui, user, notification 도메인 스토어 구조 정리",
      "NextSeo 기반 SEO 메타, next-sitemap, next/image 공통 이미지 컴포넌트 구성",
      "FCM 웹 푸시, 결제, 관리자 기능 연계",
      "Flutter WebView 래핑, 인증 토큰/다크모드/백버튼/푸시 권한 Web-Native 브리지 설계",
    ],
    achievements: [
      "시리즈/에피소드/투표/커뮤니티 흐름을 하나의 사용자 경험으로 통합",
      "LangChain + Azure OpenAI 기반 캐릭터 채팅 기능 구현",
      "채팅방 생성/저장/불러오기/토큰 차감 및 충전 흐름 구축",
      "누적 유저 1만 명, 피크 100건/초 AI 채팅 요청이 발생하는 서비스 운영",
      "채팅방 단위 AI 인스턴스 재사용으로 같은 방 재대화 시 세계관 재학습 비용 절감",
      "12시간 미사용 TTL 폐기와 히스토리 변경 시 재생성 정책으로 장기 운영 메모리 누수 방지",
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
      "CryptoJS",
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
        tech: "Flutter WebView",
        reason:
          "Next.js 웹 코드베이스를 재활용하되 인증 토큰, 다크모드, 백버튼, 푸시 권한은 Web-Native 브리지로 동기화해 iOS/Android에 동시 배포",
      },
    ],
    devIssues: [
      {
        issue:
          "AI 캐릭터 세계관(worldView)이 GraphQL 쿼리로 클라이언트에 내려오면 시스템 프롬프트와 외부 시크릿이 브라우저 표면에 닿는 문제",
        solution:
          "클라이언트 측 암호화를 폐기하고 characterId만 전달하도록 변경. Next.js API Route(BFF)가 worldView를 직접 조회해 LangChain 프롬프트에 주입",
      },
      {
        issue:
          "메시지마다 LangChain Chain과 대화 메모리를 새로 만들면 응답 지연과 토큰 비용이 증가하고, 만든 인스턴스를 방치하면 Node 메모리가 누적되는 문제",
        solution:
          "채팅방 ID 단위로 AI 인스턴스를 풀링하고 12시간 미사용 시 자동 폐기. 사용자가 과거 대화를 편집해 history가 바뀌면 인스턴스를 폐기하고 재생성",
      },
      {
        issue:
          "인증 세션과 로컬 토큰 상태가 달라질 때 GraphQL 요청 헤더와 캐시 상태가 어긋날 수 있는 문제",
        solution:
          "ApolloClientLayout에서 세션/토큰 변화에 맞춰 클라이언트를 재구성해 인증 컨텍스트와 API 클라이언트를 동기화",
      },
      {
        issue:
          "AI 피드에서 200~300개를 본 뒤 상세로 이동하면 뒤로가기 시 목록과 스크롤 위치가 처음으로 리셋되는 문제",
        solution:
          "이탈 직전 목록 개수와 스크롤 위치를 sessionStorage에 기록하고 scrollRestoration을 manual로 제어해 같은 목록과 위치로 복귀",
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
      "페이지 페칭 시점, AI 캐릭터의 수명, 시스템 프롬프트의 위치는 처음엔 다른 문제처럼 보였지만 운영해보니 결국 객체가 어디에 살고 언제 사라져야 하는가의 문제였습니다. 화면 설계만큼 경계와 수명 설계가 서비스 안정성에 중요하다는 것을 배웠습니다.",
    imageHint: "CHIZU COMICS 대표 화면 이미지",
    videoUrl:
      "https://iframe.videodelivery.net/e311c4b8b0ef0347e3c8718df1041e08",
    imageUrl: null,
  },
  {
    organization: "OG",
    title: "CHIZU",
    oneLine:
      "이미지 작품 거래 플랫폼의 실시간 동기화, 클라이언트 이미지 최적화, Masonry 무한 스크롤 구축",
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
      "Storybook으로 디자인-코드 컴포넌트 기준 정립",
    ],
    contributions: [
      "Next.js/TypeScript 기반 핵심 화면 설계 및 구현",
      "GraphQL(Apollo) 연동으로 데이터 조회/업데이트 흐름 안정화",
      "NFT 생성/컬렉션 배포/거래(Buy Now, Offer, Bid, Settle) 플로우 구현",
      "Socket.IO 실시간 알림, 필터/검색, page/count 기반 무한 스크롤 탐색 경험 구현",
      "업로드 이미지의 클라이언트 리사이징 및 원격 이미지 최적화 설정 적용",
      "이미지 비율 기반 Masonry 카드 높이 계산과 컬럼 분산 로직 구현",
      "Figma 컴포넌트 정의를 Storybook으로 옮겨 디자이너가 PR 리뷰에 직접 합류할 수 있는 기준 마련",
    ],
    achievements: [
      "기반 서비스의 핵심 화면을 구현하여 일정 내 출시",
      "GraphQL(Apollo) 연동 구조를 정리해 데이터 조회/업데이트 흐름을 안정화하고 화면 응답 경험 개선",
      "파일 업로드, 실시간/비동기 처리 등 사용자 기능을 일관된 UX로 제공",
      "업로드 전 canvas 기반 축소 이미지를 생성해 이미지 전송량과 저장 비용을 줄이는 구조 마련",
      "Browse/NFT 목록을 page/count 단위로 요청하고 화면 하단 진입 시 다음 페이지를 불러와 초기 로딩량 감소",
      "이미지 width/height 비율로 Masonry 카드 높이를 선점해 로딩 전후 layout shift 완화",
      "Apollo InMemoryCache와 홈 API 통합 요청 구조로 중복 네트워크 요청 비용 절감",
      "Socket.IO 이벤트를 트리거로 사용하고 GraphQL network-only 재호출로 거래 화면의 단일 진실 유지",
      "Storybook 도입으로 컴포넌트 재사용/variant 의사결정 비용 감소",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Apollo Client",
      "Zustand",
      "NextAuth",
      "Socket.IO Client",
      "GraphQL",
      "React Hook Form",
      "Framer Motion",
      "Storybook",
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
        reason:
          "입찰/낙찰/알림 등 실시간 이벤트를 화면 갱신 트리거로 받고, 거래 정합성은 GraphQL 재호출로 유지하기 위해 사용",
      },
      {
        tech: "Storybook",
        reason:
          "Figma와 코드 컴포넌트의 사용 기준을 맞추고 디자이너가 구현 결과를 직접 확인할 수 있는 단일 기준으로 활용",
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
          "다른 사용자의 거래/오퍼 알림은 도착하지만 보고 있던 상세 화면의 가격과 상태가 그대로 남아 정보가 어긋나는 문제",
        solution:
          "Socket.IO 이벤트를 Zustand에 쌓고 상세 페이지가 관련 이벤트를 감지하면 GraphQL을 network-only 정책으로 재호출해 최신 데이터로 교체",
      },
      {
        issue:
          "NFT/프로필/배너처럼 외부 원격 이미지가 많아 초기 로딩과 업로드 비용이 커질 수 있는 문제",
        solution:
          "next.config.js에 외부 이미지 도메인을 등록해 next/image 최적화를 적용하고, 업로드 전 canvas로 긴 변 500px 이하 축소본을 생성",
      },
      {
        issue:
          "이미지가 로드되기 전 카드 높이를 알 수 없어 Masonry 카드 위치가 재정렬되고 CLS가 누적되는 문제",
        solution:
          "서버에서 받은 width/height 비율로 카드 높이를 미리 계산하고 가장 짧은 컬럼에 배치하는 분산 로직으로 레이아웃 흔들림을 완화",
      },
      {
        issue:
          "신규 화면마다 Figma와 코드 컴포넌트의 variant 기준이 어긋나 반복 의사결정이 생기는 문제",
        solution:
          "디자이너/프론트엔드가 함께 확인하는 Storybook을 도입해 재사용 기준과 PR 리뷰 기준을 단일화",
      },
    ],
    retrospective:
      "이 프로젝트는 라이브러리에 맡길 것과 직접 짤 것의 분기점을 계속 정해야 했던 작업이었습니다. Masonry는 컬럼 균형과 CLS 방지를 동시에 풀기 위해 직접 구현했고, 폼과 라우팅처럼 도구의 가정이 도메인과 맞는 영역은 기존 도구를 활용했습니다.",
    imageHint: "CHIZU 핵심 화면 이미지",
    videoUrl:
      "https://iframe.videodelivery.net/43f90b45114542f66c388fe26f5a12bf",
    imageUrl: null,
  },
  {
    organization: "OG",
    title: "두근두근 냥빵냥빵",
    oneLine:
      "카페 경영 시뮬레이션 게임의 클라이언트 전반을 담당하며 인터랙션과 성능을 함께 개선한 프로젝트",
    role: "클라이언트 전반 — 인터랙션 설계, 시스템 구현, 성능 최적화",
    period: "2024.11 ~ 2026.02",
    members: "클라이언트 개발 1명, 서버 개발 1명, 디자이너 1명, 기획자 1명",
    contributionRate: "클라이언트 전반 90%",
    imageHint: "두근두근 냥빵냥빵 화면 이미지",
    isLive: true,
    highlights: [
      "그래픽 처리 비용 49% 감소",
      "데이터 로드 속도 2.67배 향상 (6.3ms → 2.4ms)",
      "상태 기반 UI 인터랙션/모션 20종 이상 구현",
      "누적 2만 다운로드, 피크 1,700 DAU 라이브 운영",
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
      "누적 2만 다운로드, 피크 1,700 DAU 라이브 운영",
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
    title: "에듀에듀",
    oneLine:
      "B2B 화상채팅 플랫폼과 Wekeep·QuickClass 응용 서비스를 구현한 프로젝트",
    role: "퍼블리셔로 입사해 프론트엔드, PHP/MySQL 데이터 연동, 어드민 기능 확장까지 담당",
    period: "2020.10 ~ 2022.06",
    members: "개발 2명",
    contributionRate: "사용자 UI/UX 전반, PHP/MySQL 연동 및 운영 기능 확장",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    highlights: [
      "학원·기업 납품용 B2B 화상채팅 플랫폼 사용자 흐름 구현",
      "클래스 개설 → 목록 → 상세 → 입장 → 화상채팅까지 전 플로우 구현",
      "기존 PHP 어드민 베이스 위에 운영 기능 확장",
      "MySQL 테이블 직접 설계 및 쿼리 작성",
    ],
    contributions: [
      "HTML/CSS/JavaScript 기반 클래스 개설, 목록, 상세, 입장, 화상채팅 사용자 플로우 구현",
      "기존 PHP 어드민 베이스 위에 실시간 화상 관리, 일정/학생/상세 페이지 관리, 수익률 지표 기능 확장",
      "MySQL 테이블 설계 및 쿼리 작성으로 클래스/예약/관리 데이터 흐름 구축",
      "화상채팅 코어를 Wekeep(화상명함), QuickClass(전문가 클래스 마켓) 응용 서비스로 재활용",
      "Wekeep 명함 → 미팅 진입 UI 흐름과 PHP 서버 연동 구현",
      "QuickClass 전문가 검색, 클래스 개설/예약/입장 흐름 UI와 데이터 연동 구현",
    ],
    achievements: [
      "학원·기업이 직접 클래스를 개설하고 운영할 수 있는 B2B 화상채팅 플랫폼 완성",
      "퍼블리싱 중심 역할에서 PHP/MySQL 기반 데이터 연동과 어드민 기능 확장까지 업무 범위 확대",
      "화상채팅 코어를 여러 서비스에 재활용하며 도메인이 달라도 유지되는 사용자 흐름 구조를 경험",
      "기존 코드베이스와 어드민 흐름을 읽고 그 위에 기능을 자연스럽게 확장하는 역량 확보",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "MySQL"],
    retrospective:
      "퍼블리셔로 입사한 뒤 PHP와 MySQL까지 영역을 넓혀가며 기존 어드민 베이스 위에 운영 기능을 확장했습니다. 새로 짜는 것만큼 기존 흐름을 읽고 그 위에 자연스럽게 얹는 일이 중요하다는 것을 배웠습니다.",
    imageHint: "에듀에듀 B2B 화상채팅 플랫폼 화면 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/d3bce1bb-1dc2-47e2-09c4-2b2af2340e00/public",
  },
  {
    organization: "Personal",
    title: "카공맵 (KaGongMap)",
    oneLine:
      "카공족이 직접 만드는 카페 지도 커뮤니티를 기획·디자인·개발·배포까지 단독 진행한 개인 제품",
    role: "기획, 디자인, 프론트엔드, 백엔드, 배포 단독 진행",
    period: "2026.04 ~ 진행중",
    members: "개인 프로젝트",
    contributionRate: "100%",
    isLive: true,
    siteUrl: "https://www.xn--ob0bo0wy3p.com/",
    githubUrl: "https://github.com/ChanGeunPark/KaGongMap",
    highlights: [
      "Next.js 16 App Router와 React 19 기반 지도 커뮤니티 구현",
      "마커용/상세용 데이터 페이로드를 DB view 단에서 분리해 초기 로딩 최적화",
      "Supabase RLS, 서버 라우트 전용 쓰기, 어드민 가드로 3중 보안 레이어 구성",
      "Hono + Claude CLI 로컬 브릿지와 SSE로 클라우드 LLM 비용 없는 AI 자동 제보 파이프라인 구현",
    ],
    contributions: [
      "네이버 지도 API와 Kakao Geocoding 기반 카페 등록/검색/지도 표시 흐름 구현",
      "콘센트, 와이파이, 소음, 시간 제한 등 카공족 관점의 실용 정보를 사용자 참여형 데이터로 모델링",
      "마커용 가벼운 데이터와 상세용 이미지/후기/영업시간 데이터를 DB view 단에서 분리",
      "카페 등록, 상세, 수정, 후기를 지도 위 모달로 처리하고 Zustand로 지도 뷰포트와 선택 상태 보존",
      "Supabase PostgreSQL/Auth/RLS와 NextAuth(Kakao, Google) 인증 흐름 구성",
      "Cloudflare Images, Firebase FCM/Analytics, React Query, React Hook Form을 실제 제품 흐름에 통합",
      "어드민 PC 로컬 서버(Hono)와 Claude CLI를 SSE로 연결해 AI 자동 제보 검수 파이프라인 구현",
    ],
    achievements: [
      "지도 첫 렌더에서는 마커만 불러오고 핀 클릭 시 상세를 lazy fetch해 카페 수 증가에도 초기 페이로드를 일정하게 유지",
      "비로그인 좋아요를 localStorage, RPC, DB 3단계로 분리해 로그인 전후 UX와 데이터 정합성 균형 확보",
      "Supabase RLS, 서버 라우트 전용 쓰기, 어드민 가드로 데이터 변경 경로를 방어적으로 설계",
      "클라우드 LLM 호출 없이 로컬 브릿지 기반 AI 자동 제보를 운영해 비용 0원 실험",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "PostgreSQL",
      "NextAuth",
      "Naver Map API",
      "Kakao Geocoding",
      "Cloudflare Images",
      "Firebase FCM",
      "Firebase Analytics",
      "Zustand",
      "React Query",
      "React Hook Form",
      "Hono",
      "SSE",
      "Vitest",
    ],
    techReasons: [
      {
        tech: "Next.js 16 App Router",
        reason:
          "지도 중심 UI에서 서버 라우트, RSC, 클라이언트 인터랙션을 역할별로 분리하고 최신 App Router 구조를 실서비스 크기로 검증하기 위해 선택",
      },
      {
        tech: "Supabase RLS",
        reason:
          "사용자 제보와 좋아요처럼 권한 경계가 중요한 데이터를 DB 행 단위에서 한 번 더 방어하기 위해 사용",
      },
      {
        tech: "React Query",
        reason:
          "마커/상세/후기처럼 서버 상태의 stale 여부와 lazy fetch 타이밍이 중요한 데이터를 화면 단위로 제어하기 위해 선택",
      },
      {
        tech: "Zustand",
        reason:
          "지도 뷰포트, 선택 카페, 모달 상태처럼 라우트 이동 없이 보존해야 하는 UI 상태를 가볍게 일원화",
      },
      {
        tech: "Hono + SSE",
        reason:
          "어드민 PC의 로컬 Claude CLI 결과를 검수 화면으로 실시간 전달해 클라우드 LLM 비용 없이 AI 자동 제보를 실험하기 위해 사용",
      },
    ],
    devIssues: [
      {
        issue:
          "지도 서비스에서 모든 카페 상세 데이터를 첫 렌더에 싣게 되면 이미지/후기/영업시간 때문에 초기 페이로드가 커지는 문제",
        solution:
          "마커용 view와 상세용 view를 분리해 첫 렌더는 좌표/태그/좋아요 수만 받고, 상세 정보는 핀 클릭 시 lazy fetch",
      },
      {
        issue:
          "비로그인 사용자의 좋아요 경험을 살리면서 중복/위조 요청과 로그인 후 데이터 정합성을 함께 관리해야 하는 문제",
        solution:
          "localStorage, RPC, DB 저장을 단계별로 분리하고 로그인 상태에 따라 서버 검증 경로를 다르게 적용",
      },
      {
        issue:
          "AI 자동 제보를 클라우드 LLM로 처리하면 사이드 프로젝트 운영 비용이 계속 발생하는 문제",
        solution:
          "어드민 PC에 Hono 로컬 서버와 Claude CLI를 띄우고 SSE로 검수 화면에 전달해 사람 제보와 같은 검증 라인에 합류",
      },
    ],
    retrospective:
      "회사에서 익힌 페이지별 fetching 전략과 도메인 단위 상태 분리를 지도 서비스 제약에 맞게 다시 적용했습니다. 작은 개인 제품이지만 원칙이 도메인을 옮겨도 살아남는다는 것을 확인했고, Next.js 16과 React 19 같은 최신 스택도 실제 배포 흐름으로 학습했습니다.",
    imageHint: "카공맵 지도 커뮤니티 화면 이미지",
    videoUrl:
      "https://iframe.videodelivery.net/c2352e881613a8bd7dee67a5c678ed9d",
    imageUrl: null,
  },
];
