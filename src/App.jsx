import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Card_About from './Components/Card_About/Card'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Card_About/>
    </div>
  )
}

export default App