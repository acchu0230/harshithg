import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Simple from './Simple';
import Myinfo from './Myinfo';
// import Footer from './Footer';
import Project from './Project';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';


function App() {
  return (
    <Router>
      <div>
        <Simple />
      <Routes>
        {/* <Route path="/" element={<div></div>} /> */}
        <Route path="/myinfo" element={<Myinfo />} />
        <Route path="project" element={<Project />} />
        <Route path='education' element={<Education/>} />
        <Route path="skills" element={<Skills/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;