import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  return (
    <>
      <Example />
      <h1 className="text-3xl font-bold  bg-gradient-to-r from-red-600  to-yellow-400 inline-block text-transparent bg-clip-text">
      Instagram Clone
    </h1>
    <p>This app is fully responsive</p>
    <Button/>
    </>
  )
}

export default App
