import React, { useState } from 'react'
import { IoMdRemoveCircle } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import '../css/todo.css'



function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false)
    const [newTodo, setNewTodo] = useState(content)

    const removeTodo = () => {
        onRemoveTodo(id)
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo

        }
        onUpdateTodo(request)
        setEditable(false);
    }

    return (
        <div className='todo' >
            <div style={{ width: '400px' }}>
                {
                    editable ? <input type="text"
                        className='todo-input' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> : content
                }
            </div>
            <div >
                <IoMdRemoveCircle className='todo-icons' onClick={removeTodo} />
                {
                    editable ? <FaCheck onClick={updateTodo} className='todo-icons' /> : <MdEditSquare className='todo-icons' onClick={() => setEditable(true)} />
                }

            </div>
        </div>
    )
}

export default Todo
