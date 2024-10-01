import React from 'react'
import { IoMdRemoveCircle } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import '../css/todo.css'



function Todo() {
    return (
        <div className='todo'>
            <div>
                ben ilk todoyum
            </div>
            <div >
                <IoMdRemoveCircle className='todo-icons' />
                <MdEditSquare className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo
