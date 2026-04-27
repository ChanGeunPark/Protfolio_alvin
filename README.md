# Alvin Portfolio

프론트엔드 개발자 박찬근의 포트폴리오 사이트입니다.  
5년 이상의 실무 경험을 바탕으로 웹 서비스, AI 캐릭터 채팅, NFT 마켓플레이스, Unity 모바일 게임, 교육 플랫폼 프로젝트를 소개합니다.

## 소개

이 포트폴리오는 단순한 프로젝트 목록이 아니라, 각 프로젝트에서 어떤 문제를 마주했고 어떤 방식으로 해결했는지를 보여주는 데 초점을 맞췄습니다.

- 프론트엔드 구조 설계, 상태 관리, API 연동, SEO, 성능 최적화 경험 정리
- 프로젝트별 역할, 기여도, 기술 선택 이유, 개발 이슈와 해결 과정 소개
- GSAP, Framer Motion, React Three Fiber 기반 인터랙티브 UI 구성
- EmailJS를 활용한 연락 폼 제공

## 주요 섹션

- `Intro`: 3D/인터랙션 기반 첫 화면
- `About`: 개발자로서의 강점과 일하는 방식
- `Experience`: 회사별 경력과 수행 역할
- `Project`: 대표 프로젝트 상세 소개
- `Skills`: 실무에서 사용한 기술 스택
- `Contact`: GitHub, 이메일, 메시지 전송 폼

## 대표 프로젝트

### 냥빵냥빵두근두근냥빵

카페 경영 시뮬레이션 게임의 클라이언트 전반을 담당한 Unity 프로젝트입니다.

- 클라이언트 전반 90% 담당
- 그래픽 처리 비용 49% 감소
- MessagePack 도입으로 데이터 로드 속도 2.67배 향상
- Observer 패턴 기반 자동 UI 업데이트 시스템 구현
- 누적 2만 다운로드 라이브 운영

### CHIZU COMICS

AI 캐릭터 채팅과 인터랙티브 웹툰 경험을 결합한 플랫폼입니다.

- 프론트엔드 전반 90% 담당
- SSR/ISR, Apollo Client, Zustand 기반 데이터/상태 구조 설계
- LangChain + Azure OpenAI 기반 AI 캐릭터 채팅 구현
- 누적 유저 1만 명, 피크 100건/초 AI 채팅 요청 서비스 운영
- GraphQL Codegen 기반 타입 안정성 확보

### CHIZU

NFT 마켓플레이스의 핵심 화면과 데이터 흐름을 구축한 프로젝트입니다.

- 프론트엔드 전반 60% 담당
- NFT 생성, 컬렉션 배포, 거래 플로우 구현
- GraphQL 페이지네이션과 무한 스크롤로 초기 로딩량 감소
- 이미지 리사이징과 Masonry 레이아웃으로 네트워크 비용 및 layout shift 완화
- Socket.IO 이벤트와 Apollo Cache 동기화 처리

### 에듀키즈 / Wekeep

PHP, MySQL 기반 환경에서 디자인, 퍼블리싱, 프론트엔드, 서버 연동을 함께 담당한 초기 실무 프로젝트입니다.

- 유치원·어린이집 홈페이지 플랫폼 구축
- 웹 명함 제작 및 화상상담 기능 UI 구현
- 신청서 입력, DB 저장, 관리자 조회 흐름 설계
- PHP 서버 연동 및 MySQL 데이터 저장 구조 구현

## 기술 스택

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Zustand
- Apollo Client
- GraphQL
- Framer Motion
- GSAP

### 3D / Graphics

- React Three Fiber
- Drei
- Three.js
- PixiJS

### Service / Integration

- EmailJS
- Next SEO
- Firebase
- GCP
- LangChain
- Azure OpenAI

### Game Client Experience

- Unity
- C#
- DOTween
- UniTask
- Addressables
- MessagePack
- NavMesh

## 실행 방법

```bash
npm install
npm run dev
```

## 사용 가능한 스크립트

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 환경 변수

연락 폼을 사용하려면 EmailJS 설정이 필요합니다.

```bash
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
```

환경 변수가 없을 경우 사이트는 실행되지만 메시지 전송 기능은 동작하지 않습니다.

## 연락처

- GitHub: [ChanGeunPark](https://github.com/ChanGeunPark)
- Email: [design795@naver.com](mailto:design795@naver.com)
