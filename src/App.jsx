import { useState } from 'react'
import Hero from './Components/Hero'
import Nav from './Components/Nav'
import FIndU from './Components/FIndU'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Hero/>
    <FIndU/>
     
    </>
  )
}

export default App
