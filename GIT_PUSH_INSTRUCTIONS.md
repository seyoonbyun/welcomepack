# GitHub에 코드 올리기 가이드

## Git이 설치되어 있다면

터미널에서 다음 명령어를 순서대로 실행하세요:

```bash
# 1. 프로젝트 디렉토리로 이동
cd C:\Users\Gram\Desktop\welcome-pack\html-css-js-demo

# 2. Git 리포지토리 초기화 (처음 한 번만)
git init

# 3. 원격 리포지토리 추가
git remote add origin https://github.com/seyoonbyun/welcomepack.git

# 4. 모든 파일 추가
git add .

# 5. 커밋
git commit -m "Initial commit: BNI 크루 오거나이저 상세페이지"

# 6. 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

## Git이 설치되어 있지 않다면

1. **Git 설치**: https://git-scm.com/download/win 에서 다운로드 및 설치
2. 설치 후 위 명령어 실행

## 또는 GitHub Desktop 사용

1. GitHub Desktop 설치: https://desktop.github.com/
2. 리포지토리 클론 또는 로컬 폴더 추가
3. 변경사항 커밋 및 푸시

## 현재 포함된 파일들

- `index.html` - 메인 HTML 파일
- `styles.css` - 스타일시트
- `app.js` - JavaScript 파일
- `assets/` - 이미지 파일들

