import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Form } from "./components/input"



function App() {

   const [message,setMessage] = useState(" ")


  return (
    <div className="App">


      <h1>{message}</h1>
    
      <button onClick={()=>setMessage("This is Throtlling ......")}>Click Me</button>

      <Form />




         </div>
  )
}

export default App
