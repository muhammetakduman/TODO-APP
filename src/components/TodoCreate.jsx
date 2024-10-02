import React, { useState } from 'react'
import '../css/todocreate.css'
function TodoCreate({ justTodo }) {
    const [newTodo, setnewTodo] = useState('');

    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 9999999),
            content: newTodo
        }
        justTodo(request)
    }
    return (
        <div className='todo-create'>
            <input type="text"
                value={newTodo}
                onChange={(e) => setnewTodo(e.target.value)}
                className='todo-input' placeholder='Todo giriniz' />
            <button onClick={createTodo}
                className='todo-button'>
                Todo Oluştur
            </button>
        </div>
    )
}

export default TodoCreate
