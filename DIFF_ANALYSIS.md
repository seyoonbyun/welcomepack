# 레퍼런스 페이지 vs 현재 구현 비교 분석

## 🔴 주요 차이점

### 1. **히어로 섹션 구조 완전히 다름**

**레퍼런스 페이지:**
- 배경: **배경 이미지** (BNI Korea 멤버십 키트 더스트백 이미지)
- 서브타이틀: "BNI Korea New Membership Kit" (흰색/회색)
- 메인 제목: "성공적인 비즈니스 여정의 시작" (Playfair Display, 흰색, 72px)
- 설명: 환영 메시지 (흰색)
- 버튼: "Givers Gain® — 주는 자가 얻는다" (밝은 회색 배경, 흰색 텍스트)

**현재 구현:**
- 배경: **어두운 회색 그라데이션** (from-gray-800 to-gray-900)
- 메인 제목: "BNI KOREA" (큰 빨간색 텍스트, 2줄)
- 서브타이틀: "성공적인 비즈니스 여정의 시작" (빨간색)
- 설명: 다른 텍스트
- 버튼: "자세히 보기" (흰색 배경, 검은색 텍스트)

### 2. **페이지 구조**

**레퍼런스 페이지:**
- 단일 페이지 (랜딩 + 상세가 하나의 페이지)
- TopBar 없음
- 헤더만 있음

**현재 구현:**
- 랜딩 페이지 (`/`)와 상세 페이지 (`/detail`)로 분리
- TopBar 추가됨 (Special-Order Showcase)
- 두 개의 다른 히어로 섹션

### 3. **히어로 섹션 배경**

**레퍼런스:**
```html
<img src="배경 이미지" alt="BNI Korea 멤버십 키트 더스트백" />
```

**현재:**
```tsx
className="bg-gradient-to-b from-gray-800 to-gray-900"
```

### 4. **히어로 섹션 텍스트 순서와 스타일**

**레퍼런스:**
1. "BNI Korea New Membership Kit" (서브타이틀)
2. "성공적인 비즈니스 여정의 시작" (H1, 흰색)
3. 환영 메시지 (흰색)
4. "Givers Gain® — 주는 자가 얻는다" 버튼

**현재:**
1. "BNI KOREA" (큰 빨간색, 2줄)
2. "성공적인 비즈니스 여정의 시작" (빨간색)
3. 다른 설명 텍스트
4. "자세히 보기" 버튼

### 5. **레이아웃 및 섹션 배경색**

**레퍼런스:**
- 히어로: 배경 이미지
- Professional Organizer: 흰색 배경
- Interior Design: 흰색 배경
- Product Details: 흰색 배경
- Knowledge & Philosophy: 흰색 배경
- Essential Tools: 흰색 배경
- CTA: 어두운 배경

**현재:**
- 히어로: 어두운 회색 그라데이션
- Professional Organizer: 흰색 배경 ✅
- Interior Design: 회색 배경 (bg-gray-50) ❌
- Product Details: 흰색 배경 ✅
- 기타 섹션들도 배경색이 다를 수 있음

### 6. **TopBar 존재 여부**

**레퍼런스:**
- TopBar 없음

**현재:**
- TopBar 추가됨 (Special-Order Showcase, BNI, 검색)

## ✅ 올바르게 구현된 부분

1. 폰트 (Inter, Playfair Display) ✅
2. 섹션 구조 (Professional Organizer, Interior Design 등) ✅
3. 이미지 갤러리 기능 ✅
4. 네비게이션 메뉴 ✅
5. 대부분의 텍스트 내용 ✅

## 🔧 수정이 필요한 부분

1. **히어로 섹션을 레퍼런스와 동일하게 변경**
   - 배경 이미지 사용
   - 텍스트 순서와 스타일 변경
   - 버튼 텍스트 변경

2. **단일 페이지로 통합**
   - 랜딩 페이지와 상세 페이지를 하나로 통합
   - 또는 랜딩 페이지를 레퍼런스와 동일하게 수정

3. **TopBar 제거**
   - 레퍼런스에는 없으므로 제거

4. **섹션 배경색 조정**
   - Interior Design 섹션 배경을 흰색으로 변경

5. **히어로 섹션 텍스트 색상**
   - 모든 텍스트를 흰색으로 변경 (배경 이미지 위에 표시)

