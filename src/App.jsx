import TodoCreate from "./components/TodoCreate.jsx"
import './App.css'
import TodoList from "./components/TodoList"
import { useState } from "react"
function App() {

  const [todos, setTodo] = useState([]);

  const createTodo = (newTodo) => {
    setTodo([...todos, newTodo]);
  }
  console.log(todos);

  return (
    <div className='app'>
      <div className="main">
        <TodoCreate justTodo={createTodo} />
        <TodoList />
      </div>

    </div>
  )
}

export default App
