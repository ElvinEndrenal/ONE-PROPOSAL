import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Card_About from './components/card/Card';
// import LogIn from './components/pages/login/LogIn';
import Commitment from './components/commitment/Commitment';
import Footer from './components/footer/Footer';

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