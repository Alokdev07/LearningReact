import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color,setColor] = useState("olive")

  return (
    <>
     <div className='h-screen w-screen flex justify-center' style={{backgroundColor : color}}>
      <div className='fixed bottom-14 flex flex-wrap justify-center items-center w-80 bg-white rounded-xl p-1'>
        <button className='px-3 py-1 rounded-full text-white mx-2' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
        <button className='px-3 py-1 rounded-full text-white mx-2' style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
        <button className='px-3 py-1 rounded-full text-white mx-2' style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
        <button className='px-3 py-1 rounded-full text-white mx-2' style={{backgroundColor: "Black"}} onClick={() => setColor("black")}>Black</button>
      </div>
     </div>
    </>
  )
}

export default App
