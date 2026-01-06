# 설치 및 실행 가이드

## 필수 요구사항

- Node.js 18 이상
- npm 또는 yarn

## 설치 단계

1. **의존성 설치**
   ```bash
   cd bni-welcome-pack
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   브라우저에서 http://localhost:3000 열기

3. **빌드 (프로덕션)**
   ```bash
   npm run build
   ```

4. **프로덕션 프리뷰**
   ```bash
   npm run preview
   ```

## 백엔드 서버 실행 (선택적)

```bash
npm run server
```

서버는 http://localhost:3001 에서 실행됩니다.

## 문제 해결

### 이미지가 표시되지 않는 경우
- `public/assets/` 폴더에 이미지 파일이 있는지 확인하세요
- 이미지 파일명이 대소문자를 정확히 맞췄는지 확인하세요

### 타입 에러가 발생하는 경우
```bash
npm install --save-dev @types/node
```

### Tailwind CSS가 작동하지 않는 경우
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

