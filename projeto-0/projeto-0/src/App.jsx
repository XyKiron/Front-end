import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Components from './Components'
import Components_01 from './Components_01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Components_01 />
        <Components_02 />
      </div>
    </>
  )
}

export default App
