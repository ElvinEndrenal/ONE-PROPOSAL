import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Card_About from './Components/Card_About/Card'
import LogIn from './Components/Pages/LogIn/LogIn';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Card_About/>
      {/* <LogIn /> */}
    </div>
  )
}

export default App