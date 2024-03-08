import React, { useState } from 'react'

// redux의 connect 함수를 참조한다.
// redux의 connect 함수는 전역 데이터를 사용하려는 특정 컴포넌트와 전역데이터 관리기능을 연결해주는 함수입니다.
// 전역 데이터값을 해당 컴포넌트의 props 하위 속성으로 제공하여 손쉽게 컴포넌트내에서 전역데이터를 접근할수 있게 하거나
// 또는 전역데이터 값을 변경하기 위한 dispatch통해 액션함수를 호출하는데 dispatch훅을 사용하지 않고도
// connect이용하면 액션함수 자체를 해당 컴포넌트에 props 하위 함수로 등록해주어서 보다 빠르고 쉽게 직관적으로 전역데이터를 업데이트 가능
import { connect } from 'react-redux'

// redux 전역공간에 데이터를 반영하려면 반드시 액션함수를 참조해야합니다.
// 리덕스 폴더안에 액션통합모듈을 참조하고 관련 액션함수를 참조합니다.
import { loginUser, apiError } from '../redux/actions'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const Login2 = (props) => {
    // 전역 데이터 반영을 위한 useDispatch 훅 변수 생성하기
    // const globalDispatch = useDispatch()

    // 전역 데이터에 로그인한 사용자 토큰값 조회하기
    // useSelector 훅을 이용하지 않고 connect 함수를 통해 해당 컴포넌트에 props에 바인딩 전역데이터를 이용해보자
    console.log('전역 데이터 로그인 사용자 토큰값:', props.token)
    console.log('전역 데이터 로그인 사용자 정보확인:', props.loginUser)

    const navigate = useNavigate()

    const [login, setLogin] = useState({ email: '', password: '' })

    const onChangeLogin = (ev) => {
        setLogin({ ...login, [ev.target.name]: ev.target.value })
    }

    // 로그인 처리 이벤트 처리함수
    const onLogin = (e) => {
        // saga 미들웨어 기반 로그인 처리 기능 적용
        props.loginUser(login.email, login.password, navigate)

        e.preventDefault()
        // 백엔드와 데이터명이 다를경우 맞춰주기
        // const loginData = {
        //     email: login.email,
        //     password: login.password
        // }
    }

    return (
        <div>
            <form onSubmit={onLogin}>
                메일주소: <input name="email" value={login.email} onChange={onChangeLogin}></input> <br />
                암호: <input
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={onChangeLogin}
                ></input>{' '}
                <br />
                <button type="submit">로그인</button>
            </form>
        </div>
    )
}

// 전역데이터 속성과 값을 해당 컴포넌트에 props하위 속성에 연결해주는 함수
const mapStateToProps = (state) => {
    const { token, loginUser } = state.Auth
    return { token, loginUser }
}

// redux connect()함수를 호출하고 (컴포넌트명) 지정해주면 전역데이터 공간과 해당 컴포넌트를 연결할수 있따.
// connect('전역데이터를 해당 컴포넌트에 props속성으로 바인딩해주는 함수정의', 각종 액션함수를 지정해주면 해당 액션함수가 props에 하위함수로 제공됨)
export default connect(mapStateToProps, { loginUser, apiError })(Login2)

// export default Login2;
