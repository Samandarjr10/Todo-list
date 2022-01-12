import React from 'react'
import './Todo.scss'

function Todo ({ children, handleDelete, handleComplete, todo }) {

    return (
        <li className={`todo ${todo.isCompleted && 'todo--inactive'}`}>
            <input type="checkbox" data-todo-id={todo.id} onChange={handleComplete} defaultChecked={todo.isCompleted} />

            {children}

            <button className='btn' data-todo-id={todo.id} onClick={handleDelete}>delete</button>
        </li>
    )
}

export default Todo