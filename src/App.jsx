import TodoCreate from "./components/TodoCreate.jsx"
import './App.css'
import TodoList from "./components/TodoList"
import { useState } from "react"
function App() {

  const [todos, setTodo] = useState([]);

  const createTodo = (newTodo) => {
    setTodo([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodo([...todos.filter((todo) => todo.id !== todoId)])
  }

  const updateTodo = (newTodo) => {
    const updatesTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodo([...updatesTodos]);
  }

  return (
    <div className='app'>
      <div className="main">
        <TodoCreate justTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>

    </div>
  )
}

export default App
