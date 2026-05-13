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
    oneLine: "인터랙티브 웹툰 플랫폼 + AI 캐릭터 채팅 서비스",
    role: "프론트엔드 전반 80% 담당",
    period: "2023.09 ~ 2024.10",
    members: "4인 개발",
    contributionRate: "프론트엔드 전반 80%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    highlights: [
      "4인 팀에서 프론트엔드 80% 구현 — Pages Router 기반 앱 전체 구조와 도메인 디렉토리 레이아웃 설계",
      "페이지 특성별 데이터 전략 — SEO 페이지는 SSR(getServerSideProps), 랜딩은 마운트 후 지연 페치, 상세는 Apollo cache-and-network로 분리",
      "AI 시스템 프롬프트·시크릿을 BFF로 차단하고 세션 단위 LangChain 인스턴스를 풀링·자동 회수해, 누적 1만 유저 AI 채팅 서비스를 메모리 누수 없이 운영",
      "GraphQL Codegen client preset 도입 — BE 스키마 변경 빌드 타임 검증",
      "Next.js 웹을 Flutter WebView로 래핑해 iOS/Android 동시 배포 + Web↔Native 브릿지 직접 설계",
    ],
    contributions: [
      "Pages Router 기반 앱 전체 구조와 도메인 디렉터리 레이아웃 설계",
      "SEO 페이지 SSR, 랜딩 지연 페치, 상세 Apollo cache-and-network 등 페이지 특성별 데이터 전략 구현",
      "AI 캐릭터 채팅 기능 기획 및 구현",
      "Next.js API Route(BFF)에서 worldView를 직접 조회해 시스템 프롬프트/시크릿 클라이언트 노출 차단",
      "채팅방 UUID 단위 LangChain 인스턴스 풀링 + 12시간 TTL 자동 폐기 + history 불일치 시 재생성 정책 적용",
      "피드 200~300개 탐색 후에도 목록과 스크롤 맥락이 유지되도록 sessionStorage + manual scrollRestoration 적용",
      "GraphQL Codegen client preset 도입으로 스키마 변경 빌드 타임 검증 체계 구축",
      "Flutter WebView 래핑 및 Web↔Native 브릿지(토큰/다크모드/백버튼/푸시 권한) 설계",
    ],
    achievements: [
      "누적 유저 약 1만명, 피크 약 100건/초 AI 채팅 요청 트래픽 운영",
      "BFF 기반 시크릿 격리 구조로 세계관/외부 키가 클라이언트 표면에 닿지 않는 보안 구조 완성",
      "채팅방 단위 인스턴스 수명 제어로 재대화 시 초기화 비용 0, 토큰 절감, OOM 없이 장기 운영",
      "피드 탐색 뒤로가기 맥락 복원으로 재페치/끊김 없는 탐색 경험 제공",
      "WebView 래핑 + 브릿지 설계로 단일 웹 코드베이스를 iOS/Android 앱으로 동시 운영",
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
      "CryptoJS",
      "Firebase FCM",
      "LangChain",
      "Azure OpenAI",
      "Toss Payments",
      "next-pwa",
      "Flutter",
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
          "AI 캐릭터 세계관(worldView)이 GraphQL로 클라이언트까지 내려오는 구조라 시스템 프롬프트/외부 시크릿 노출 위험이 있는 문제",
        solution:
          "worldView를 클라이언트에 내려보내지 않고 characterId만 전달. BFF(Next.js API Route)가 직접 조회해 LangChain 프롬프트에 주입",
      },
      {
        issue:
          "메시지마다 LangChain 인스턴스를 새로 생성하면 cold-start 지연/토큰 비용이 증가하고, 미회수 시 서버 메모리 누수가 발생하는 문제",
        solution:
          "채팅방 UUID 단위 인스턴스 풀링 + 12시간 미사용 TTL 폐기, history 불일치 감지 시 즉시 재생성",
      },
      {
        issue:
          "피드 200~300개 스크롤 후 상세 진입 뒤 복귀하면 목록 재로드와 스크롤 리셋이 발생하는 문제",
        solution:
          "이탈 직전 페이지 수/스크롤 위치를 sessionStorage에 기록하고 복귀 시 1회 렌더 후 수동 스크롤 복원(scrollRestoration: manual)",
      },
    ],
    retrospective:
      '페이지 페칭 시점, AI 캐릭터의 수명, 시스템 프롬프트의 위치 — 처음엔 다 다른 문제로 보였는데 운영해보니 결국 한 가지 질문이었습니다. "이 객체는 어디에 살고, 언제 사라져야 하는가." 다음 프로젝트는 화면 설계만큼 경계와 수명 설계도 처음부터 같이 그리려 합니다.',
    imageHint: "CHIZU COMICS 대표 화면 이미지",
    videoUrl:
      "https://iframe.videodelivery.net/e311c4b8b0ef0347e3c8718df1041e08",
    imageUrl: null,
  },
  {
    organization: "OG",
    title: "CHIZU",
    oneLine:
      "이미지 작품 거래 플랫폼 — 클라이언트 이미지 최적화 · 실시간 동기화 · Masonry 무한 스크롤",
    role: "프론트엔드 전반 60% 담당",
    period: "2022.09 ~ 2023.08",
    members: "6인 개발",
    contributionRate: "프론트엔드 전반 60%",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    highlights: [
      "업로드 전 클라이언트에서 긴 변 500px 기준으로 리사이즈 + 축소 전 적응형 블러 안티앨리어싱 처리로 전송량 절감",
      "GraphQL 페이지네이션 + 무한 스크롤 직접 구현(컬렉션 150개·활동 100개·기본 30개 단위)",
      "Masonry 그리드 자체 구현으로 컬럼 높이 편차와 CLS 문제 동시 해결",
      "Socket.IO 이벤트는 트리거로만, 거래 정합성은 GraphQL network-only 재호출로 단일 진실 유지",
      "Figma 컴포넌트 정의를 Storybook으로 단일화해 디자이너가 PR 리뷰에 직접 합류",
    ],
    contributions: [
      "Next.js/TypeScript 기반 작품 탐색·거래 화면 설계 및 구현",
      "업로드 전 긴 변 500px 리사이징 + 적응형 블러 처리 후 원본/썸네일 동시 업로드 구조 구현",
      "GraphQL 페이지네이션과 무한 스크롤 직접 구현",
      "Masonry 카드 높이 사전 계산 + 최단 컬럼 우선 배치 로직 구현",
      "Socket.IO 이벤트를 Zustand에 적재하고 GraphQL network-only 재호출로 실시간 거래 정합성 유지",
      "Storybook 기반 디자인-코드 단일 기준 마련으로 컴포넌트 의사결정 비용 절감",
    ],
    achievements: [
      "실시간 이벤트 수신 시 화면 데이터 자동 재동기화로 거래 정보 불일치 제거",
      "Masonry 무한 스크롤에서 이미지 로드 중 화면 흔들림(CLS) 제거",
      "클라이언트 이미지 최적화로 리스트 화면 전송량 절감",
      "Storybook 도입으로 디자이너-개발자 협업 기준을 코드 중심으로 통일",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Apollo Client",
      "GraphQL",
      "Zustand",
      "Socket.IO Client",
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
          "실시간 이벤트 알림은 오지만 화면의 가격·상태가 갱신되지 않아 정보 불일치가 생기는 문제",
        solution:
          "Socket 알림은 Zustand에 쌓아 트리거로만 사용하고, 진실 데이터는 GraphQL network-only 재호출로 교체",
      },
      {
        issue:
          "이미지 로드 전 카드 높이가 미정이라 로드 순간 카드 재정렬과 CLS가 누적되는 문제",
        solution:
          "서버에서 받은 가로/세로 비율로 카드 높이를 사전 계산하고 최단 컬럼 우선 배치로 컬럼 균형 유지",
      },
      {
        issue:
          "Figma 컴포넌트 정의와 코드 인터페이스 기준이 어긋나 반복 의사결정이 발생하는 문제",
        solution:
          "Storybook을 단일 기준으로 도입해 디자이너가 구현 결과 확인 및 PR 리뷰에 직접 참여",
      },
    ],
    retrospective:
      '이 프로젝트는 "라이브러리에 맡길 것과 직접 짤 것" 의 분기점을 계속 정해야 했던 작업이었습니다. Masonry는 직접 짜는 게 맞았고 컬럼 균형과 CLS 방지를 동시에 풀려면 그 위에서 다시 한 겹 더 얹어야 했기 때문에 폼·라우팅 같은 영역은 기존 도구로 충분했습니다. 다음 프로젝트라면 "라이브러리의 가정과 우리 도메인이 어디서 어긋나는가" 를 먼저 보고, 직접 짜는 비용과 라이브러리를 우회하는 비용을 비교한 뒤 결정하려 합니다.',
    imageHint: "CHIZU 핵심 화면 이미지",
    videoUrl:
      "https://iframe.videodelivery.net/43f90b45114542f66c388fe26f5a12bf",
    imageUrl: null,
  },
  {
    organization: "OG",
    title: "두근두근 냥빵냥빵",
    oneLine:
      "모바일 카페 경영 시뮬레이션 게임 — Unity 클라이언트 전반",
    role: "클라이언트 전반 90% 담당",
    period: "2024.11 ~ 2026.02",
    members: "클라이언트 개발 1명, 서버 개발 1명, 디자이너 1명, 기획자 1명",
    contributionRate: "클라이언트 전반 90%",
    imageHint: "두근두근 냥빵냥빵 화면 이미지",
    isLive: true,
    highlights: [
      "그래픽 처리 비용 49% 감소",
      "데이터 로드 속도 2.67배 향상 (6.3ms → 2.4ms)",
      "UI 인터랙션 20종 이상 상태 기반 모션 구현",
      "누적 2만 다운로드 · 라이브 운영",
    ],
    contributions: [
      "DOTween Sequence 애니메이션 큐잉 + 불필요한 렌더링 호출 제거로 그래픽 처리 비용 49% 절감",
      "MessagePack 바이너리 직렬화로 데이터 로드 속도 2.67배 향상 (6.3ms → 2.4ms)",
      "EditMode 플래그 기반 NavMesh 베이킹 시점 최적화 + UniTask 비동기 처리로 프레임 드롭 제거",
      "가챠·스킬·UI 등 상태 기반 인터랙션/모션 20종 이상 구현",
    ],
    achievements: [
      "렌더링 병목 개선으로 그래픽 처리 비용 49% 절감",
      "MessagePack 도입으로 데이터 로드 속도 2.67배 향상",
      "오브젝트 배치 편집 중 프레임 드롭 제거",
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
          "가챠·스킬·UI 등 다중 애니메이션 동시 실행 시 프레임 드롭이 발생하는 문제",
        solution:
          "DOTween Sequence로 애니메이션을 큐잉하고 불필요한 렌더링 호출 제거",
      },
      {
        issue:
          "오브젝트 배치/삭제 시마다 NavMesh 베이킹 지연으로 프레임 드롭이 발생하는 문제",
        solution:
          "EditMode 플래그로 편집 종료 시 1회만 베이킹 + UniTask 비동기 처리 적용",
      },
    ],
    retrospective:
      "4년차에 게임 클라이언트로 영역을 확장하면서, 이미 가지고 있던 두 원칙이 도메인을 넘어 그대로 작동한다는 걸 다시 확인했습니다. NPC 행동 시스템을 Behavior Tree 대신 State Machine으로 택한 것은 복잡한 도구가 답이 아니라 제약(상태 5~10개 · 모바일 동시 5명 · 4인 팀의 이해도) 안에서 가장 단순한 도구가 옳다는 판단이었고, 최적화 작업도 추측 대신 Unity Profiler, Frame Debugger로 병목을 측정한 뒤 드로우콜, GC, Update 순으로 임팩트 큰 곳부터 손봤기 때문에 짧은 일정에서도 의미 있는 결과를 만들 수 있었습니다.",
    videoUrl:
      "https://iframe.videodelivery.net/dfb40045f4086d15b9898dce60a7757f",
    imageUrl: null,
  },
  {
    organization: "에듀에듀",
    title: "에듀에듀",
    oneLine:
      "B2B 화상채팅 플랫폼과 응용 서비스(Wekeep · QuickClass) — 퍼블리셔에서 풀스택 영역까지 확장",
    role: "퍼블리셔로 입사 → PHP / MySQL까지 영역 확장, 프론트엔드 + 데이터 연동 전담",
    period: "2020.10 ~ 2022.06",
    contributionRate:
      "화면 디자인 · 퍼블리싱 · 사용자 UI/UX 전반 · 기존 PHP 베이스 위 어드민 기능 확장 · MySQL 테이블 설계 · PHP 연동",
    isLive: false,
    siteUrl: undefined,
    githubUrl: undefined,
    highlights: [
      "학원·기업 납품용 B2B 화상채팅 플랫폼 사용자 흐름 구현",
      "클래스 개설 → 목록 → 상세 → 입장 → 화상채팅까지 전 플로우 구현",
      "기존 PHP 어드민 베이스 위에 클래스 개설, 실시간 화상 관리, 일정·학생·상세 페이지 관리, 수익률 지표 등 운영 기능 확장",
      "MySQL 테이블 직접 설계 및 쿼리 작성",
      "화상채팅 코어를 Wekeep, QuickClass 등 응용 서비스로 재활용",
    ],
    contributions: [
      "B2B 화상채팅 플랫폼(학원·기업 납품) 사용자 플로우를 HTML/CSS/JS로 구현",
      "기존 PHP 어드민 베이스 위에 실시간 화상·일정·학생·상세 페이지·수익 지표 운영 기능 확장",
      "MySQL 테이블 설계 및 쿼리 작성까지 직접 진행",
      "Wekeep: QR 명함 정보 확인 → 화상 입장 단일 흐름 UI와 PHP 서버 연동 구현",
      "QuickClass: 전문가 검색, 클래스 개설·예약·입장 흐름 UI와 데이터 연동 구현",
    ],
    achievements: [
      "학원·기업이 직접 클래스를 개설·운영할 수 있는 플랫폼 완성",
      "퍼블리셔에서 프론트엔드 + PHP/MySQL 데이터 연동까지 영역 확장",
      "화상채팅 코어를 응용 서비스로 확장하며 재사용 가능한 사용자 흐름 구조 확보",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "MySQL"],
    retrospective:
      "퍼블리셔로 입사한 뒤 PHP와 MySQL까지 영역을 넓혀가며 기존 어드민 베이스 위에 운영 기능을 확장하고 사용자 플로우 전반을 구현했습니다. 이미 만들어진 구조 위에서 기능을 보태는 작업이 많았기 때문에, 코드를 새로 짜는 것만큼이나 기존 흐름을 읽고 그 위에 자연스럽게 얹는 일이 중요하다는 것을 배웠습니다. 화상채팅 코어가 Wekeep, QuickClass 같은 응용 서비스로 재사용되는 과정을 보면서, 도메인이 달라도 좋은 사용자 흐름의 구조는 재활용된다는 것도 함께 체감했습니다.",
    imageHint: "에듀에듀 B2B 화상채팅 플랫폼 화면 이미지",
    videoUrl: null,
    imageUrl:
      "https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/d3bce1bb-1dc2-47e2-09c4-2b2af2340e00/public",
  },
  {
    organization: "Personal",
    title: "카공맵 (KaGongMap)",
    oneLine:
      "카공족이 직접 만드는 카페 지도 커뮤니티",
    role: "기획, 디자인, 프론트엔드, 백엔드, 배포 단독 진행",
    period: "2026.04 ~ 진행중",
    members: "개인 프로젝트",
    contributionRate: "100%",
    isLive: true,
    siteUrl: "https://www.xn--ob0bo0wy3p.com/",
    githubUrl: "https://github.com/ChanGeunPark/KaGongMap",
    highlights: [
      "AI 자동 제보를 어드민 로컬 브릿지(Hono + Claude CLI + SSE)로 운영해 클라우드 LLM 비용 0원",
      "마커용 경량 데이터와 상세용 중량 데이터를 분리해 카페 수 증가에도 초기 로딩 페이로드를 일정하게 유지",
      "카페 등록·상세·수정·후기를 모달 기반으로 처리해 지도 컨텍스트를 보존",
      "Supabase RLS + 서버 전용 쓰기 + 어드민 가드로 3중 보안 레이어 구성",
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
      "지도 첫 렌더에서는 마커만 로딩하고 상세는 핀 클릭 시 lazy fetch해 초기 체감 속도 유지",
      "카페 등록·상세·수정·후기를 별도 라우트 없이 모달로 처리해 사용자 흐름 단순화",
      "로컬 브릿지 기반 AI 자동 제보를 사람 제보와 동일한 검증 라인에 합류시켜 운영 비용 0원 실험",
      "RLS/서버 전용 쓰기/어드민 가드 레이어링으로 데이터 변경 경로를 방어적으로 설계",
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
