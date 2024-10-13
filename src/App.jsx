import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Card_About from './Components/Card_About/Card';
import LogIn from './Components/Pages/LogIn/LogIn';
import Commitment from './Components/Commitment/Commitment';
import Footer from './Components/Footer/Footer';
// import StudentMain from './Components/Pages/Main/Student_Interface/StudentMain';
// import TeacherMain from './Components/Pages/Main/Teacher_Interface/TeacherMain';
// import StudentSubmission from './Components/Pages/Main/Student_Interface/Sudent_Submit/StudentSubmission';
// import TeacherReview from './Components/Pages/Main/Teacher_Interface/Teacher_Check/TeacherReview';

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

          {/* Currently improving the authentication and submission interface */}

          {/* <Route path="/StudentMain" element={<StudentMain />} />
          <Route path="/TeacherMain" element={<TeacherMain />} />
          <Route path="/StudentSubmission" element={<StudentSubmission/>}/>
          <Route path="/TeacherReview" element={<TeacherReview/>}/> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;