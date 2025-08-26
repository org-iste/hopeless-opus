import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import AboutUs from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <AboutUs />
  )
}

export default App
