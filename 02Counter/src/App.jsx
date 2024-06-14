import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  
  const addValue = () => {
    if (counter < 20) {
      console.log("Add button is clicked");
     
      setCounter(counter+1); //1
      setCounter(counter+2); //2
      setCounter(counter+3); //3
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      console.log("Add button is clicked");
      counter -= 1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add value </button>
      <br />
      <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
