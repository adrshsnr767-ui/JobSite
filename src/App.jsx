import { useState } from 'react'
import Hero from './Components/Hero'
import Nav from './Components/Nav'
import FIndU from './Components/FIndU'
import FeaturedJob from './Components/FeaturedJob'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Hero/>
    <FIndU/>
    <FeaturedJob/>
     
    </>
  )
}

export default App
