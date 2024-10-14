import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Card_About from './components/Card_About/Card';
// import LogIn from './components/Pages/LogIn/LogIn';
import Commitment from './components/Commitment/Commitment';
import Footer from './components/Footer/Footer';

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

          {/* <Route path="/Login" element={<LogIn />} />  */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;