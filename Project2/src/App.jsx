import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
 let myObj = {
  userName : "Alok Bhuyan",
  age : "23"
 }
  return (
    <>
     <h1 className='bg-green-600 text-black font-sans rounded-xl p-4 font-bold mb-4' >Chai aur code</h1>
     <Card subject='Science'/>
     <Card subject='Physics'/>
   
    </>
  )
}

export default App
