import React, { useState } from 'react'

const TodoRegist = ({ onInsert }) => {
    // 단일할일정보 데이터 구조정의 및 초기값할당
    const [todo, setTodo] = useState({ text: '', desc: '' })

    // 할일 정보 입력시 관련 UI요소에 바인딩된 상태 속성값 변경처리 이벤트 처리함수
    const onTotoChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }

    // 폼내 submit 이벤트가 발생하면 실행되는 이벤트 핸들러 함수 정의
    const onSubmit = (e) => {
        // App.js 컴포넌트에서 props로 전달된 onInsert()이벤트 처리함수를 호출해 TodoList에 데이터를 반영한다.
        onInsert(todo.text, todo.desc)
        setTodo({ text: '', desc: '' })

        // 자바스크립트에서 UI요소 이벤트 파생을 최소시키는 함수
        // 현재 발생한 e(Submit)이벤트를 더이상 진행되지않게 차단하는 기능
        e.preventDefault()
    }

    return (
        <div style={{ margin: '0 auto', width: '50' }}>
            {/* onSubmit은 등록의 submit이 발행되면 실행 */}
            <form onSubmit={onSubmit}>
                <label>제목</label>
                <input name="text" value={todo.text} onChange={onTotoChange}></input>
                <label>내용</label>
                <input name="desc" value={todo.desc} onChange={onTotoChange}></input>
                <button type="submit">등록</button>
            </form>
        </div>
    )
}

export default TodoRegist
