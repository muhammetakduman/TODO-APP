import React from 'react'
import '../css/todocreate.css'
function TodoCreate() {
    return (
        <div className='todo-create'>
            <input type="text" className='todo-input' placeholder='Todo giriniz' />
            <button className='todo-button'>
                Todo Oluştur
            </button>
        </div>
    )
}

export default TodoCreate
