import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUserSuccess } from '../../redux/actions'

const Logout = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
        // 인증토큰 삭제처리
        localStorage.removeItem('authToken')

        // 전역상태 변경
        props.loginUserSuccess()

        // 로그아웃 전역상태 처리
        navigate('/login')
    }, [])

    document.title = 'Logout | Chatvia React - Responsive Bootstrap 5 Chat App'

    return <React.Fragment></React.Fragment>
}

export default connect(null, { loginUserSuccess })(Logout)
