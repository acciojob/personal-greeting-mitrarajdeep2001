
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState('')
  return (
    <div>
        <input type="text" onChange={(e) => {
          setInput('Hello ' + e.target.value)
        }}/>
        <p>{input}</p>
    </div>
  )
}

export default App
