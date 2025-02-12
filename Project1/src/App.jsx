import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter,setCounter] = useState(0);
  let addC = () => {
    if (counter === 20) {
      return;
    }
  setCounter(counter+1)
  };
  let subC = () => {
    if(counter === 0){
      return;
    }
   setCounter(counter-1)
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <p>Counter {counter}</p>
      <button onClick={addC}>Add counter</button>

      <br />

      <button onClick={subC}>Sub Counter</button>
    </>
  );
}

export default App;
