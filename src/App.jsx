import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Card_About from './Components/Card_About/Card';
import LogIn from './Components/Pages/LogIn/LogIn';
import Commitment from './Components/Commitment/Commitment';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Pages/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <About />
              <Card_About />
              <Commitment />
              <Footer />
            </>
          } />
          
          <Route path="/Login" element={
            <LogIn /> 
            } /> 

          <Route path="/Dashboard" element={
            <Dashboard /> 
            } /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;