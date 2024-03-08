import React, { useEffect, useState } from 'react'

// 전역 데이터 공간에서 로그인한 사용자 정보 가져오기 위한 useSelector훅 참조하기
// import { useSelector } from 'react-redux'

// connect 함수를 이용해 저녁데이터를 불러옵시다
import { connect } from 'react-redux'

// import axios from 'axios'

const Profile2 = (props) => {
    return (
        <div>
            <h1>프로필정보 - 리덕스(스토어)전역정보 기반</h1>
            메일주소: {props.loginUser.email} <br />
            이름: {props.loginUser.name}
            <br />
            프로필사진: <img src={props.loginUser.profile_img_path}></img>
            <br />
        </div>
    )
}

// 전역데이터 속성과 값을 해당 컴포넌트에 props하위 속성에 연결해주는 함수
const mapStateToProps = (state) => {
    const { token, loginUser } = state.Auth
    return { token, loginUser }
}

export default connect(mapStateToProps)(Profile2)
