import { useState } from 'react'
import './App.css'
import Card  from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"yojit",
    age:21
  }

  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <Card channel="Channel 1" />
      <Card channel="Channel 2" />
    </div>
           
    </>
  )
}

export default App
