# RE:COSM 웹사이트 리빌딩 — Truekind 스타일 (2026-08-25)

## 목표
truekindskincare.com의 디자인 언어를 RE:COSM(래시 세럼, 단일 제품)에 이식한 전면 리빌딩.
지난 리디자인 2회 거절 이력("유아틱", 크림+세리프 클리셰) → 이번엔 사용자가 직접 지정한
실사이트 레퍼런스 기반. **차분하게 톤다운하지 않고 truekind 수준의 플레이풀함 그대로.**

## 확정 사항 (사용자 승인)
- 이미지: 무료 스톡(Unsplash/Pexels) — 눈가/래시 클로즈업, 스킨 질감 매크로. 추후 실물 교체 전제
- 범위: 전체 10페이지 (홈/제품/과학/가이드3+목록/스토키스트/FAQ/연락처)
- 애니메이션: 풀 연출 — 프리로더 카운터(00→100, 세리프, 다크, sessionStorage 재방문 스킵),
  Lenis 스무스 스크롤, 스크롤 등장 연출(마스크 리빌, 스태거)
- 팔레트: 크림/포슬린 + 화이트 + **브랜드 주황(#E8593C 계열, Kolmar 케이스 스펙 Pantone 1655C)** + 다크 차콜
  — 주황을 액센트가 아닌 팔레트 주요 축으로 (버튼, 대형 타이포 강조, 그래픽 요소)

## 디자인 언어 (truekind 직접 관찰 기반)
- 헤드라인: 산세리프 + 이탤릭 세리프 혼용 ("Re:*define* your lashes")
- 프리로더: 차콜 #282828 배경, 대형 세리프 숫자 카운터
- 풀블리드 사진 히어로 + 중앙 혼합 타이포 + 하단 풀와이드 알약 CTA(화살표 원형 버튼)
- 플로팅 라운드 카드 + 원형 라인 아이콘 (4필러: Prostaglandin-Free/Peptide/Made in Korea/Fragrance-Free)
- 유기적 타원(ellipse) 이미지 마스크, 보태니컬/플레이풀 장식 요소 유지
- 폰트: Instrument Sans(산세리프) + Instrument Serif(이탤릭 세리프) — Google Fonts

## 유지(불변) 항목
- SEO 전부: metadata, JSON-LD schema, sitemap, robots, GSC 파일, pSEO 가이드 콘텐츠
- 기능: /api/subscribe 웨이트리스트, CartDrawer, CookieConsent, Toast, StoreContext
- 콘텐츠 카피는 유지하되 truekind식 대형 문장 구조로 재배치 가능

## 기술
- 스택 유지: Next.js 15 App Router, 커스텀 CSS(src/styles/), Tailwind 없음
- 추가 의존성: lenis 1개만. GSAP 없이 CSS + IntersectionObserver로 연출
- 이미지: public/images/에 다운로드 후 next/image 사용

## 워크플로
redesign-existing-projects(생성) → 스크린샷 크리틱 루프 → web-interface-guidelines(감사)
