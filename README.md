
<img width="7952" height="3998" alt="Service Mock Up" src="https://github.com/user-attachments/assets/4e4ed813-8624-4c27-9069-8fc529e99d0f" />

## 서비스 소개

여행 일정과 사용자의 취향에 맞춰 경주 여행 코스를 추천하고, 여행 중 현장 진행부터 기록까지 이어주는 경주 관광 가이드 서비스

### Deploy
https://oiso-fe.vercel.app
### Language
한국어, 영어

## 기술 스택

| 영역            | 기술                                           |
| --------------- | ---------------------------------------------- |
| UI              | React 19, TypeScript, Tailwind CSS 4, Radix UI |
| 빌드            | Vite 8                                         |
| 라우팅          | TanStack Router                                |
| 서버 상태       | TanStack Query                                 |
| 클라이언트 상태 | Zustand                                        |
| HTTP            | Axios                                          |
| 지도            | Kakao Maps SDK, react-kakao-maps-sdk           |
| 다국어          | i18next, react-i18next                         |
| 기타            | dnd-kit, QR Scanner, Sonner                    |
| 배포            | Vercel                                         |

## 프로젝트 구조

```text
src/
├─ api/          # 백엔드 API 호출 함수
├─ assets/       # 아이콘과 정적 이미지
├─ components/   # 도메인·공통 UI 컴포넌트
├─ constants/    # API 경로, query key 등 상수
├─ hooks/        # Query/Mutation 및 화면 로직 훅
├─ lib/          # Axios, i18n, query client 등 기반 설정
├─ locales/      # ko/en 번역 리소스
├─ mappers/      # API 모델과 화면 모델 변환
├─ routes/       # TanStack Router 파일 기반 라우트
├─ stores/       # Zustand 전역 상태
└─ types/        # 도메인 및 API 타입
scripts/
└─ sync-translations.ts  # Google Sheets 번역 리소스 동기화
```

## 주요 기능

### 여행지 탐색

- 관광지·음식점·숙소 목록 및 상세 정보 조회
- 키워드와 카테고리 기반 검색
- 카카오맵을 이용한 장소 위치와 이동 경로 표시
- 관심 장소 저장 및 저장 목록 관리

### 코스 생성과 추천

- 여행 기간, 동행 유형, 테마, 이동 수단, 출발지를 입력 받아 사용자 맞춤 코스 추천
- 장소 추가·삭제·순서 변경 및 장소 간 이동 수단 편집 등 사용자가 원하는 코스 생성

### 코스 진행과 공유

- 진행 중인 장소와 다음 장소 안내
- 다음 장소의 이동 거리·시간과 카카오 맵 딥링크 길찾기 버튼 제공
- 장소별 방문, QR, 스토리카드 스탬프 미션
- 코스 중단·완료 및 일차별 진행 상태 관리
- 코스 공개 링크와 공유 비밀번호를 이용한 동행자에게 코스 공유

### 마이페이지와 여행 기록

- 프로필과 선호 정보 관리
- 저장한 장소·스토리카드 조회
- 관광지·음식점·숙소별 개인 메모 작성 및 조회
- 완료한 코스를 여행노트 형태로 조회

### i18n (국제화) 다국어 처리

- 외국인 사용자를 위한 영어 번역 지원

## 주요 서비스 화면

| 홈 | 추천코스 생성 | 코스 상세 | 코스 진행 |
| :---: | :---: | :---: | :---: |
| <img width="100%" height="600" alt="홈 화면" src="https://github.com/user-attachments/assets/f4b714b0-514c-4922-9987-781650836fdf" /> | <img width="100%" height="600" alt="추천 코스 생성 페이지" src="https://github.com/user-attachments/assets/ba7d12c6-4f34-4d03-a418-93307aa18fa3" /> | <img width="100%" height="600" alt="코스 상세 페이지" src="https://github.com/user-attachments/assets/3e853824-48cc-48d1-b478-542d2a859535" /> | <img width="100%" height="600" alt="코스 진행 페이지" src="https://github.com/user-attachments/assets/4c10a12d-83d8-4260-b0f9-78cd62b3af53" />

 | 다음 장소 이동 | 장소 탐색 | 코스 생성 | 스토리카드 |
| :---: | :---: | :---: | :---: |
| <img width="100%" height="600" alt="스크린샷 2026-09-20 오전 12 46 11" src="https://github.com/user-attachments/assets/9f9330a1-e306-44a4-8162-498823409e87" /> | <img width="100%" height="600" alt="장소 탐색 페이지" src="https://github.com/user-attachments/assets/6b494515-9c32-476e-b451-82e8ec6a7793" /> | <img width="100%" height="600" alt="코스 생성 페이지" src="https://github.com/user-attachments/assets/f5f0dd9d-c0dd-4e13-b101-75343ed5372b" /> | <img width="100%" height="600" alt="스토리카드" src="https://github.com/user-attachments/assets/4b040cb5-4d2e-46fb-86ea-0d1977a690e3" />

 | 다국어처리 (홈) | - | - | - |
| :---: | :--: | :--: | :--: |
| <img width="100%" height="600" alt="다국어 처리 홈화면" src="https://github.com/user-attachments/assets/f9a3a35e-0fd7-41df-b19b-74507ab31d9b" /> |<img width="100%" height="600" alt="다국어처리 코스 상세" src="https://github.com/user-attachments/assets/5fb05582-3d55-47df-99c9-5688271a8dcd" /> | <img width="100%" height="600" alt="다국어 처리 스토리 카드" src="https://github.com/user-attachments/assets/f29a5881-cb5b-4248-89fa-fa31fafe048b" /> | <img width="100%" height="600" alt="다국어 처리 장소 상세" src="https://github.com/user-attachments/assets/a7f7482c-8c20-45ba-a8ed-9cf013e94eec" />




