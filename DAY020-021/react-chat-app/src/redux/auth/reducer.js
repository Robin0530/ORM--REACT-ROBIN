// 액션타입 참조
import { USER_LOGIN, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from '../../constants/actionTypes'

// 초기값
const INIT_STATE = {
    token: '',
    loginUser: {},
    isUserLogout: false,
}

//Auth리듀서함수 정의
const Auth = (state = INIT_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                token: action.payload.token,
                loginUser: action.payload.loginUser,
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                loginUser: action.payload.loginUser,
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                token: '',
                loginUser: {},
                isUserLogout: true,
            }
        default:
            return state
    }
}

export default Auth
