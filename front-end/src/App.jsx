import React from 'react'
import Welc from './Components/Welcome'
import Nav from './Components/Navbar'
import Cont from './Components/Contact'
import Book from './Components/Bookdetails'
import About from './Components/About'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import down from './assets/download.jpeg'
import './App.css'






const App = () => {
  return (
    <div>
     
    <Router>
       <img src={down}  id="bg"/>
      <Nav />
      <Routes>
        <Route path="/" element={<Welc />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Cont />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
