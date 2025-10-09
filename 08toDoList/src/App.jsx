import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoItem from './Components/TodoItem/TodoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TodoForm />
     <TodoItem />
    </>
  )
}

export default App
