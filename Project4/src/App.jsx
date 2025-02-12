import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [length,setLength] = useState(8);
  const [number,setNumber] = useState(false);
  const [character,setCharacter] = useState(false);
  const [password,setPassword] = useState("");
  const passwordRef = useRef(null);


  const copyPassoword = useCallback(() => {
   
    window.navigator.clipboard.writeText(password)
  },[password,passwordRef])
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number)  str += '0123456789';
    if(character) str += '@#$%^'

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }
  ,[length,number,character,setPassword])
    useEffect(() => {
      passwordGenerator()
    }
    ,[character,length,setPassword,number])
  return (
    <>
        <div className='h-screen w-full bg-slate-800 flex justify-center items-center flex-col'>

          <div className='flex h-auto w-auto items-center justify-center gap-2'>
          <div className='bg-gray-600 text-white p-2 px-6 rounded-xl' ref={passwordRef}>{password}</div>
          <button onClick={copyPassoword} className='bg-indigo-700 p-2 px-6 text-white rounded-xl'>Copy</button>
          </div>


          <div className='text-white flex items-center gap-2 mt-2'>
            <input name='length' min={8} max={20}  value={length} onChange={(e) => {setLength(e.target.value)}} type="range" />
            <label htmlFor="length">Length({length})</label>
            <input defaultChecked = {number} onChange={() => {setNumber((val) => !val)}} name='number' type="checkbox" />
            <label htmlFor="number">Number</label>
            <input defaultChecked = {character} onChange={() => {setCharacter((prev) => !prev)}}  name='character' type="checkbox" />
            <label htmlFor="character">Character</label>
          </div>
        </div>
    </>
  )
}

export default App
