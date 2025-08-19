import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)
  
  //let counter=5

  const addValue=()=>{
    console.log('Add value : ', counter);
    //counter++;
    setCounter(counter+1) // or just put counter 
  }

  const removeValue=()=>{
    if(counter===0){
      button.disabled=true;
    }
    setCounter(counter-1);
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value: {counter}</button><br />
      <button onClick={removeValue} >Remove value</button>
    </>
  )
}

export default App
