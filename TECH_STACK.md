# 기술 스택 적용 현황

레퍼런스 페이지 (https://product-detail-page--hq29.replit.app) 분석 결과를 바탕으로 적용된 기술 스택입니다.

## Frontend 기술 스택

### ✅ React 18
- **적용 위치**: 모든 컴포넌트 (`src/pages/`, `src/components/`)
- **사용 예시**: 
  - 함수형 컴포넌트로 구성
  - Hooks 사용 (useState, useRef, useScroll 등)

### ✅ TypeScript
- **적용 위치**: 모든 `.tsx`, `.ts` 파일
- **사용 예시**:
  - 타입 안전성 보장
  - 인터페이스 및 타입 정의
  - Props 타입 체크

### ✅ Vite
- **적용 위치**: `vite.config.ts`
- **기능**:
  - 빠른 HMR (Hot Module Replacement)
  - 최적화된 빌드
  - ESBuild 번들링

### ✅ Tailwind CSS
- **적용 위치**: `tailwind.config.js`, 모든 컴포넌트
- **기능**:
  - 유틸리티 기반 스타일링
  - 반응형 디자인 (md:, lg: 브레이크포인트)
  - 커스텀 컬러 (BNI 레드)
  - 다크 모드 지원 준비

### ✅ shadcn/ui (Radix UI 기반)
- **적용 위치**: `src/components/ui/button.tsx`
- **기능**:
  - 접근성 고려한 컴포넌트
  - Variant 기반 스타일링 (class-variance-authority)
  - Radix UI Slot 패턴

### ✅ Framer Motion
- **적용 위치**: 모든 페이지 컴포넌트
- **주요 기능**:
  - **스크롤 애니메이션**: `useScroll`, `useTransform` 훅 사용
  - **뷰포트 기반 애니메이션**: `whileInView` prop
  - **스태거 애니메이션**: `staggerChildren` 사용
  - **이미지 갤러리 전환**: `animate` prop으로 부드러운 전환
  - **인터랙션**: `whileHover`, `whileTap` 사용

**구체적 적용 예시**:
```tsx
// 스크롤 기반 페이드/스케일
const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

// 뷰포트 진입 시 애니메이션
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
```

### ✅ Wouter
- **적용 위치**: `src/App.tsx`
- **기능**:
  - 클라이언트 사이드 라우팅
  - 경로 기반 네비게이션
  - `<Link>`, `<Route>`, `<Switch>` 컴포넌트

### ✅ TanStack Query (React Query)
- **적용 위치**: `src/main.tsx`
- **기능**:
  - 서버 상태 관리 준비
  - 캐싱 및 리페칭 설정
  - 현재는 기본 설정만 (향후 API 연동 시 활용)

### ✅ Lucide React
- **적용 위치**: 모든 페이지 및 컴포넌트
- **사용 아이콘**:
  - `ChevronDown`, `ChevronLeft`, `ChevronRight`
  - `ArrowUp`
  - `Moon`, `Sun` (다크 모드)

## Backend 기술 스택 (선택적)

### ✅ Express.js
- **적용 위치**: `server/index.ts`
- **기능**:
  - RESTful API 엔드포인트
  - CORS 설정
  - Health check 엔드포인트

### ⚠️ Drizzle ORM + PostgreSQL
- **상태**: 설정 준비됨 (package.json에 포함)
- **향후 적용**: 데이터베이스 연동 시 사용

### ✅ Zod
- **적용 위치**: package.json에 포함
- **향후 적용**: API 스키마 검증에 사용 예정

## 개발 도구

### ✅ ESBuild
- Vite에 내장되어 자동 사용
- 빠른 번들링 및 트랜스파일링

### ✅ PostCSS
- **적용 위치**: `postcss.config.js`
- Tailwind CSS 처리

### ✅ tsx
- **적용 위치**: `package.json` scripts
- TypeScript 직접 실행 (서버용)

## 디자인 특징

### ✅ 다크/라이트 모드 지원
- **적용 위치**: `src/components/theme-provider.tsx`
- **기능**: 
  - 시스템 설정 감지
  - 수동 전환 가능
  - localStorage에 저장

### ✅ 반응형 디자인
- **적용 위치**: 모든 컴포넌트
- **브레이크포인트**:
  - 모바일: 기본
  - md: 768px 이상
  - lg: 1024px 이상

### ✅ 스크롤 기반 애니메이션
- **Framer Motion** 사용
- **기능**:
  - 스크롤 진행도에 따른 페이드/스케일
  - 뷰포트 진입 시 애니메이션
  - 부드러운 스크롤 전환

### ✅ BNI 시그니처 레드 컬러
- **적용 위치**: `tailwind.config.js`
- **컬러 코드**: 
  - `bni-red`: #c01620
  - `bni-red-dark`: #a0121a
  - `bni-red-light`: #ff3a43

## 레퍼런스 페이지와의 비교

### 동일하게 구현된 기능
1. ✅ 이미지 갤러리 (좌우 네비게이션 + 인디케이터)
2. ✅ 스크롤 기반 히어로 섹션 페이드
3. ✅ 섹션별 스태거 애니메이션
4. ✅ 반응형 그리드 레이아웃
5. ✅ Inter + Playfair Display 폰트
6. ✅ BNI 레드 컬러 테마

### 추가 구현된 기능
1. ✅ 다크/라이트 모드 전환
2. ✅ 스크롤 투 탑 버튼
3. ✅ 부드러운 페이지 전환
4. ✅ 향상된 접근성

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 프리뷰
npm run preview
```

