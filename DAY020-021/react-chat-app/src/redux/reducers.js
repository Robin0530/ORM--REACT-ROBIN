// redux 패키지의 combineReducers를 통해 리듀서 파일에서 제공하는 리듀서함수를 통합할 수 있다.
import { combineReducers } from "redux";

// 리듀서 함수 참조
import Auth from "./auth/reducer";
// import Layout from "./layout/reducer";

// combineReducers를 이용해 각종 리듀서함수를 통합해줍니다.
export default combineReducers({ Auth });
