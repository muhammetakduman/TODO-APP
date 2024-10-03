import React from 'react'
import Todo from './Todo'

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div style={{ width: '100%', marginTop: '75px' }}>

            {
                todos && todos.map((todo, index) => (
                    <Todo
                        key={`${todo.id}-${index}`}
                        todo={todo}
                        onRemoveTodo={onRemoveTodo}
                        onUpdateTodo={onUpdateTodo}
                    />
                ))
            }

        </div>
    )
}

export default TodoList
