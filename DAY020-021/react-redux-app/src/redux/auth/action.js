import { USER_LOGIN, API_FAILED, LOGIN_USER } from '../../constants/actionTypes'

// 로그인 처리를 위한 액션함수
export const loginUser = (email, password, navigate) => ({
    type: LOGIN_USER,
    payload: { email, password, navigate },
})

// 로그인 처리를 위한 액션함수
export const userLogin = (token, loginUser) => ({
    type: USER_LOGIN,
    payload: { token, loginUser },
})

// 백엔드 인증통신 에러결과 처리를 위한 액션함수
export const apiError = (error) => ({
    type: API_FAILED,
    payload: error,
})
