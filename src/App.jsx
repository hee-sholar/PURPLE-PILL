import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
