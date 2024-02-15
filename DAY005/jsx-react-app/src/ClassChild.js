import React, { Component } from 'react'

// 클래스형 컴포넌트는 기본적으로 react 패키지의 Component 라는 클래스를 상속받아서 구현합니다.
// javascript에서 특정 클래스를 상속받을때는 extends 예약어를 사용해 상속받아 새로운 클래스를 정의합니다.
class ClassChild extends Component {
    // 코딩 가능 영역

    render() {
        // 코딩 가능 영역
        return (
            <div>
                <h1>부서소개</h1>
                <h2>{this.props.deptName}</h2>
                부서명:{this.props.deptRole} <br />
                부서역할:{this.props.Employeee} <br />
                부서원수:{this.props.SampleData} 명 <br />
            </div>
        )
    }
}

export default ClassChild
