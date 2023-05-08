# 기능 구현 목록

## Model

### localstorage crud

- [x] localstorage로 부터 음식점 리스트(문자열)를 가져온다.

  - [x] localstorage로 부터 받은 데이터를 정렬버튼이 갖고 있는 상태에 따라 정렬한다.
  - [x] 문자열을 음식점 정보(객체 요소)를 갖는 배열로 담아 반환한다. `{ 카테고리, 이름, 거리, 설명, 참조링크 }`

- [x] localstorage에 음식점 리스트(문자열)를 갱신한다.
  - [x] 유저 입력정보 유효성 검사

### 정렬

- [x] localstorage로 부터 받은 데이터를 정렬버튼이 갖고 있는 상태에 따라 정렬한다.

### 필터

- [x] localstorage로 부터 받은 데이터를 필터버튼이 갖고 있는 상태에 따라 선별한다.

### UI

- [x] model로 부터 받은 음식점 리스트를 렌더링
- [x] 메뉴추가 버튼 누르면 모달창 렌더링
- [x] 필터링 버튼
- [x] 정렬 버튼
