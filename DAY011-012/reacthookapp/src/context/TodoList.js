import React, { useState, useEffect, useRef, useCallback, useContext } from 'react'

// 전역 컨텍스트 참조하기
import { AppContext } from '../App'

// 전역 데이터 값을 조회하고 반환하는 함수 정의
function useTodoCountState() {
    const value = useContext(AppContext)
    return value
}

const TodoList = () => {
    const refTitle = useRef(null)

    // 전역 데이터중 카운터 상태값을 관리해주는 개발자 정의 훅을 이용한 데이터제어 하기
    // 전역 데이터 상태값을 관리해주는 useState 개발자정의훅 구현하기
    // 용도는 전역데이터를 setter함수로 해당 컴포넌트에서 관리해주기 위한 전용 훅 정의
    const [, setTodoCount] = useTodoCountState()

    // 단일 할일정보
    const [todo, setTodo] = useState({
        title: '',
        contents: '',
        orderby: 0,
    })

    // 할일데이터 목록 (배열)
    const [todoList, setTodoList] = useState([])

    // 최초 컴포턴트가 마운팅될때를 감지해서 제목입력박스에 포커스를 맞춘다.
    useEffect(() => {
        refTitle.current.focus()
    }, [])

    // 할일정보 속성 데이터 바인딩 처리 이벤트
    const onTodoChange = useCallback(
        (e) => {
            setTodo({ ...todo, [e.target.name]: e.target.value })
        },
        [todo],
    )

    // 할일추가하기
    const onAdd = useCallback(() => {
        // todoList의 복사본을 만들어서 todo의 값을 넣어준다
        setTodoList([...todoList, todo])
        setTodo({
            title: '',
            contents: '',
            orderby: 0,
        })
        refTitle.current.focus()

        // 전역데이터 값 변경처리하기
        setTodoCount(() => todoList.length + 1)
    }, [todo, todoList])

    return (
        <div>
            <h1>TodoList 관리자</h1>
            할일제목 <input ref={refTitle} name="title" value={todo.title} onChange={onTodoChange}></input>
            <br></br>
            할일내용 <input name="contents" value={todo.contents} onChange={onTodoChange}></input>
            <br></br>
            우선순위 <input name="orderby" value={todo.orderby} onChange={onTodoChange}></input>
            <button onClick={onAdd}>추가</button>
            <ul>
                {todoList.map((item, index) => (
                    <li key={index}>
                        {item.title}/{item.contents}/{item.orderby}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
