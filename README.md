# BNI KOREA Welcome Pack

BNI KOREA의 새로운 멤버십 키트를 소개하는 모던 웹 애플리케이션입니다.

## 기술 스택

### Frontend
- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구 및 개발 서버
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **shadcn/ui** - UI 컴포넌트 라이브러리 (Radix UI 기반)
- **Framer Motion** - 스크롤 애니메이션 효과
- **Wouter** - 클라이언트 라우팅
- **TanStack Query** - 서버 상태 관리
- **Lucide React** - 아이콘

### Backend (선택적)
- **Express.js** - Node.js 웹 서버
- **Drizzle ORM** - 데이터베이스 ORM
- **PostgreSQL** - 데이터베이스 (Neon)
- **Zod** - 스키마 검증

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 프로젝트 구조

```
bni-welcome-pack/
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트
│   │   ├── ui/         # shadcn/ui 컴포넌트
│   │   └── ...
│   ├── pages/          # 페이지 컴포넌트
│   ├── lib/            # 유틸리티 함수
│   └── ...
├── public/              # 정적 파일
│   └── assets/         # 이미지 파일
├── server/              # Express 백엔드 (선택적)
└── ...
```

## 주요 기능

- ✨ **스크롤 기반 애니메이션** - Framer Motion을 활용한 부드러운 애니메이션
- 🌓 **다크/라이트 모드** - 테마 전환 지원
- 📱 **반응형 디자인** - 모바일부터 데스크톱까지 완벽 지원
- 🎨 **BNI 시그니처 레드 컬러** - 브랜드 아이덴티티 반영
- 🚀 **빠른 로딩** - Vite의 빠른 HMR과 최적화된 빌드

## 라이선스

© 2026 BNI KOREA. All rights reserved.

