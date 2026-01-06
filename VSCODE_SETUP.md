# VS Code에서 실행하는 방법

## ⚠️ 중요: "Go Live"는 사용할 수 없습니다

이 프로젝트는 **React + Vite** 프로젝트이므로 정적 HTML 서버(Go Live, Live Server)로는 실행할 수 없습니다. 
Vite 개발 서버를 사용해야 합니다.

## ✅ VS Code에서 실행하는 방법

### 방법 1: 터미널 사용 (가장 간단)

1. **VS Code에서 터미널 열기**
   - `Ctrl + `` (백틱) 또는
   - 메뉴: `터미널` → `새 터미널`

2. **프로젝트 폴더로 이동**
   ```bash
   cd bni-welcome-pack
   ```

3. **의존성 설치** (처음 한 번만)
   ```bash
   npm install
   ```

4. **개발 서버 실행**
   ```bash
   npm run dev
   ```

5. **브라우저에서 열기**
   - 터미널에 표시된 주소로 접속 (보통 `http://localhost:5173`)
   - 또는 `Ctrl + 클릭`으로 자동 열기

### 방법 2: 작업(Task) 사용

1. **작업 실행**
   - `Ctrl + Shift + P` → "Tasks: Run Task" 입력
   - "npm: dev" 선택

2. **또는 단축키**
   - `Ctrl + Shift + B` (기본 빌드 작업 실행)

### 방법 3: 디버깅 사용

1. **디버깅 패널 열기**
   - 왼쪽 사이드바의 "실행 및 디버깅" 아이콘 클릭
   - 또는 `Ctrl + Shift + D`

2. **설정 선택**
   - "Launch Dev Server" 선택
   - `F5` 키를 눌러 실행

## 🔧 자동 실행 설정 (선택사항)

VS Code를 열 때 자동으로 개발 서버를 실행하려면:

1. `.vscode/settings.json` 파일 생성:
```json
{
  "npm.enableScriptExplorer": true,
  "terminal.integrated.defaultProfile.windows": "PowerShell"
}
```

2. 확장 프로그램 설치 (선택사항):
   - **NPM Scripts** - npm 스크립트를 쉽게 실행
   - **Vite** - Vite 프로젝트 지원

## 📝 문제 해결

### 포트가 이미 사용 중인 경우
```bash
# 포트 변경
npm run dev -- --port 3000
```

### 의존성 오류
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
npm install
```

### 캐시 문제
```bash
# Vite 캐시 삭제
rm -rf node_modules/.vite
npm run dev
```

## 🚀 프로덕션 빌드

프로덕션 빌드를 원하면:
```bash
npm run build
npm run preview
```

## 📌 참고

- 개발 서버는 파일 변경 시 자동으로 새로고침됩니다 (HMR)
- 브라우저에서 `http://localhost:5173`로 접속하세요
- 터미널에서 `Ctrl + C`로 서버를 중지할 수 있습니다

