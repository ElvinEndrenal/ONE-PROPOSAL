import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Card_About from './Components/Card_About/Card';
import LogIn from './Components/Pages/LogIn/LogIn';
import Commitment from './Components/Commitment/Commitment';
import Footer from './Components/Footer/Footer';
<<<<<<< HEAD
import Dashboard from './Components/Pages/Dashboard/Dashboard';
=======
import StudentMain from './Components/Pages/Main/Student_Interface/StudentMain';
import TeacherMain from './Components/Pages/Main/Teacher_Interface/TeacherMain';
>>>>>>> f12fa332c2bed7087fb0e66334edf7d3328c6aff

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
          
<<<<<<< HEAD
          <Route path="/Login" element={
            <LogIn /> 
            } /> 

          <Route path="/Dashboard" element={
            <Dashboard /> 
            } /> 
=======
          <Route path="/Login" element={<LogIn />} /> 
          <Route path="/StudentMain" element={<StudentMain />} />
          <Route path="/TeacherMain" element={<TeacherMain />} />
>>>>>>> f12fa332c2bed7087fb0e66334edf7d3328c6aff

        </Routes>
      </div>
    </Router>
  );
}

export default App;