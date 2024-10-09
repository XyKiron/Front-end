import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IMC from './Components/IMC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Calculadora IMC</h1>
      <IMC />
    </>
  )
}

export default App
