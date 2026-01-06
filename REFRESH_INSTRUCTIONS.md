# 변경사항이 반영되지 않을 때 해결 방법

## 1. 개발 서버 재시작

터미널에서 다음 명령어를 실행하세요:

```bash
cd bni-welcome-pack
npm run dev
```

## 2. 브라우저 캐시 지우기

### Chrome/Edge:
- `Ctrl + Shift + Delete` → 캐시 삭제
- 또는 `Ctrl + F5` (하드 리프레시)

### 개발자 도구 사용:
- `F12` → Network 탭 → "Disable cache" 체크
- 페이지 새로고침 (`F5`)

## 3. VS Code Go Live 사용 시

VS Code의 Live Server 확장을 사용하는 경우:
1. Live Server를 중지
2. `npm run dev`로 Vite 개발 서버 실행
3. 터미널에 표시된 로컬 주소로 접속 (보통 `http://localhost:5173`)

## 4. 변경된 주요 사항

✅ TopBar 제거됨
✅ 히어로 섹션에 배경 이미지 추가
✅ 히어로 텍스트를 흰색으로 변경
✅ 루트 경로(`/`)가 상세 페이지로 연결됨
✅ Interior Design 섹션 배경을 흰색으로 변경

## 5. 파일 확인

변경사항이 반영되었는지 확인:
- `src/pages/DetailPage.tsx` - TopBar import가 제거되었는지
- `src/pages/DetailPage.tsx` - 히어로 섹션이 배경 이미지를 사용하는지
- `src/App.tsx` - 루트 경로가 DetailPage로 연결되었는지

