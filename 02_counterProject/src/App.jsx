import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 let [counter,setCounter]= useState(15)
  // let counter= 15
const addValue = () =>{
 console.log("added value is :", counter);
// console.log(counter = counter +1)
counter= counter +1
setCounter(counter) 

}
const removeValue = () =>{
  console.log("remove value is :", counter);
 // console.log(counter = counter +1)
 counter= counter -1
 setCounter(counter) 
 
 }


  return (
    <>
      <h1>hello tarun !</h1>
      <h2>counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value:{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value:{counter}</button>
      <p>tarun : {counter}</p>
    </>
  )
}

export default App
