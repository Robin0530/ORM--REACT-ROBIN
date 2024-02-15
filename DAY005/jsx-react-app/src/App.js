import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'

// 자식 컴포넌트 참조하기

// 함수형 자식 컴포넌트를 참조합니다.
import FChild from './FunctionChild'

// 클래스형 자식 컴포넌트를 참조합니다.
import CChild from './ClassChild'

// 내프로필 컴포넌트 참조하기
import MyProfile from './Profile'

// 함수형 컴포넌트 생성하기
// 리액트 UI 컴포넌트는 반환값으로 JSX UI 요소정보를 반환하여 최종 웹브라우저에 UI를 표현합니다.
// JSX UI요소를 제어하기 위해 함수내에 기능구현 영역에서 필요한 데이터와 이벤트를 처리합니다.
function App() {
    // 기능구현 코드
    // 이벤트 기능 구현
    // 해당 컴포넌트의 STATE(로컬데이터) 값과 JSX영역내 UI요소간 데이터 바인딩을 통해
    // 데이터 바인딩 기법으로 UI요소와 데이터를 편리하게 관리합니다.

    // 샘플용 로컬 문자열 테스트 데이터(스테이트) 정의 및 초기값 할당하기
    const [Sample, setSample] = useState('샘플데이터')

    // 사용자 정보 JSON 데이터 상태값 정의 및 할당
    const [user, serUser] = useState({
        userid: 'robinsss',
        name: '보람',
        email: 'rrr@gmail.com',
        telephone: '010-2256-5222',
        address: '경기도 군포시',
    })

    return (
        <div>
            <h1>안녕하세요. {Sample} </h1>
            {/* 각종 UI컴포넌트의 반환결과값이 결국 JSX 요소들이기 때문에 참조한 UI는 결국 부모컴포넌트에 JSX영역에서
                사용된다. */}
            {/* 함수형 자식 컴포넌트 결과물 (JSX요소) 표시하기 */}
            <FChild companyName="엠소프트웨어" telephone="01011112222" address="인천시 부평구" SampleData={Sample}>
                우리회사소개
            </FChild>
            <br />
            <hr />
            {/* 클래스형 자식 컴포넌트 결과물 (JSX요소) 표시하기 */}
            <CChild deptName="개발1팀" deptRole="협업툴솔루션개발" Employeee={10} SampleData={Sample}>
                개발팀소개
            </CChild>
            <br />
            <hr />
            {/* 내 프로필 자식 컴포넌트 표시하기 */}
            <MyProfile userid="robin" name="이보람" email="boram910530@gmail.com" telephone="01022565222" age={30}>
                내 소개 페이지
            </MyProfile>

            <br />
            <hr />
            {/* 내 프로필 자식 컴포넌트 표시하기 */}
            <MyProfile userid={user.userid} name={user.name} email={user.email} telephone={user.telephone} age={30}>
                스테이트기반 내 소개 페이지
            </MyProfile>
        </div>
    )
}

export default App
