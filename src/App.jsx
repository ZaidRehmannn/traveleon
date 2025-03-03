import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import LoginSignup from './pages/LoginSignup/LoginSignup'
import ScrolltoTop from './components/ScrolltoTop/ScrolltoTop'

const App = () => {
  return (
    <Router>
      <ScrolltoTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<LoginSignup />} />
      </Routes>
    </Router>
  )
}

export default App
