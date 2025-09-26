import { useState } from 'react'


function App() {
  const [color,setColor] = useState("olive")
  return (
    <>
      
     <div className="w-full h-screen " style={{backgroundColor : color}}></div>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
        <button
        onClick={()=>setColor("red")}//onclick need a function so we give it callback function
        className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "red"}}
        >Red</button>

         <button
         onClick={()=>setColor("green")}
        className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "green"}}
        >Green</button>

         <button
         onClick={()=>setColor("blue")}
        className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "blue"}}
        >Blue</button>

        <button
         onClick={()=>setColor("black")}
        className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "black"}}
        >Black</button>
      </div>  
    </div> 
    </> 
  )
}

export default App
