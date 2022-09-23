# WEO_ReactWeb

WE'O Front ReactWeb 레파지토리

# 기술스택 정리

```
  1. React
  2. TypeScript
  3. NextJS
  4. Redux + 서브 상태관리 라이브러리
  5. React Query
  6. Axios
  7. Styled-Components
  8. React UI Library
```

# 소스컨벤션

```
  1. 폴더 및 파일명: 파스칼 케이스
  2. 변수 및 함수먕: 카멜 케이스
  3. components 폴더 하위
        - 페이지명에 맞추어 컴포넌트 정의
        - 공통 컴포넌트는 Common 폴더에 정의
        - 재사용 O: styled-components는 Common 폴더에서 관리
        - 재사용 X: styled-components는 사용하는 파일에서 관리

** 동훈님 pages하위 페이지 폴더는 소문자로, 그 폴더 하위는 index.tsx로 구성하기! (=> 폴더 소문자로하는 이유는 폴더가 url 명이기때문에, 대소문자 구별함 Main !== main)
** components폴더에 페이지 폴더+Page로 만들어서 그 부분 구현하기!
** 동훈님 근데 카카오맵은 모바일 웹에서키면 오류나네요 ?? 이거 확인 필요할꺼같아요; 모바일에서 키는법 => IP 주소:3000으로 가능, 단 핸드폰과 노트북 모두 같은 와이파이에 연결되어있어야함
```
