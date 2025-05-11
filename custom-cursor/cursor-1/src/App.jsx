import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useGSAP(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY})
    }
    window.addEventListener('mousemove', mouseMove)

    gsap.to('.cursor',{
      x: mousePosition.x,
      y: mousePosition.y,
      
    })
},[mousePosition])
  return (
    <div>
      <div className='w-4 cursor h-4 rounded-full bg-black fixed  z-100'></div>
    </div>
  )
}

export default App
