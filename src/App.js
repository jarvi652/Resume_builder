import React from 'react'
import  './App.css'
import CVForm from './components/CVForm'
function App(params) {
  return(
    <div>
      <h1 className="title">Resume Builder</h1>
      <CVForm/>
    </div>
  )
} 

export default App