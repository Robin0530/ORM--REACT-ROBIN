import React from 'react'

const TodoItem = ({ todo, onRemove, onSelect }) => {
    return (
        <tr>
            <th>
                <input type="checkbox" value={todo.checked} onClick={() => onSelect(todo.id)}></input>
            </th>
            <th>{todo.id}</th>
            <th>{todo.text}</th>
            <th>{todo.desc}</th>
            <th>
                <button onClick={() => onRemove(todo.id)}>삭제</button>
            </th>
        </tr>
    )
}

export default TodoItem
