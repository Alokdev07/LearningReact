import React from "react";
import { useState,useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username,setUsername] = useState('')
    const [pass,setPass] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
      e.preventDefault();
      setUser({username,pass})
    }
    
  return (
    <div>
       <h2>Log in</h2>
       <input value={username} onChange={(e) => {
         setUsername(e.target.value)
       }
       } type="text" placeholder="Enter Your Name" />
       {" "}
       <input value={pass} onChange={(e) => {
         setPass(e.target.value)
       }
       } type="text" placeholder="Enter Your passWord" />
       <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
