// 액션타입 참조
import { USER_LOGIN } from "../../constants/actionTypes";

// 초기값
const INIT_STATE = {
  token: "",
  loginUser: {},
};

const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        loginUser: action.payload.loginUser,
      };
    default:
      return { ...state };
  }
};

export default Auth;
