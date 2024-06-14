import { useState } from 'react'
import Btn from './components/Btn'
import './App.css'

function App() {
//   let bgGreen=()=>{
//     document.body.style.backgroundColor = "green"
//   }
//   let bgBlue=()=>{
//     document.body.style.backgroundColor = "blue"
//   }
//   let bgBlack=()=>{
//     document.body.style.backgroundColor = "black"
//   }
//   let bgWhite=()=>{
//     document.body.style.backgroundColor = "white"
//   }
//   let bgYellow=()=>{
//     document.body.style.backgroundColor = "yellow"
//  }
  return (
    <>
      <div className="btns bg-white p-3 rounded-xl">
        {/* <button onClick={bgGreen } className="bg-green-400 mb-2 mt-2 rounded-xl p-2 mx-2" >Green</button>
        <button onClick={bgBlue } className="bg-blue-600 mb-2 mt-2 rounded-xl p-2 mx-2" >Blue</button>
        <button onClick={ bgBlack} className="bg-slate-950	mb-2 mt-2 rounded-xl p-2 mx-2" >Black</button>
        <button onClick={bgWhite } className="bg-white mb-2 mt-2 rounded-xl p-2 mx-2 border-2 border-black text-slate-700" >White</button>
        <button onClick={bgYellow } className="bg-yellow-400 mb-2 mt-2 rounded-xl p-2 mx-2" >Yellow</button> */}
           <Btn color ="green"/>
            <Btn color ="blue"/>
           <Btn color ="black"/>
           <Btn color ="yellow"/>
           <Btn color ="white"/>
           
      </div>
    </>
  )
}

export default App
