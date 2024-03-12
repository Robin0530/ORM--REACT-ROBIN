// Redux Action Type
// 각종 액션 타입 정의

export const TODO_COUNT = "TODO_COUNT";

export const USER_LOGIN = "USER_LOGIN";

export const THEME_COLOR = "THEME_COLOR";

export const API_FAILED = "API_FAILED";

export const LOGIN_USER = "LOGIN_USER";

// *** 각종 레이아웃 전역데이터 관리 액션 타입정의 영역 ***
// 레이아웃 관련~~~

// 최자측 메뉴 클릭시 클릭한 메뉴아이디 값을 전역데이터로 저장하고 중간에 탭컴포넌트에 관련 메뉴컴포넌트 표시하는 시나리오
export const SET_ACTIVE_TAP = "SET_ACTIVE_TAP";

// 채팅화면 상단 채팅대상자 아이콘 클릭시 해당 채팅 대상자 프로필을 화면 맨 우측 상단에 사이드바로 표현해주는 시나리오 구현
export const OPEN_USER_PROFILE_SIDEBAR = "OPEN_USER_PROFILE_SIDEBAR";

// 최좌측 메뉴바 하단에 Dark/Light 모드 선택에 따른 전체 컴포넌트 테마 색상 적용해주는 시나리오구현(테마타입 관리)
export const SET_LAYOUT_MODE = "SET_LAYOUT_MODE";
