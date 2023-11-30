// import logo from './logo.svg';
// import './App.css';
// import StudentHome from './components/StudentHome.js';
import StudentHomepage from './components/StudentHomepage.js';
import Feedback from './components/feedback.js';
import StaffHome from './components/StaffHome.js';
import ManageBooks from './components/ManageBooks.js';
import Login from './components/login.js';
import Signup from './components/signup.js';
import Navbar from './navbar.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component, useState } from 'react';
import Search from './components/Search.js';
import BookRequest from './components/bookRequest.js'
import NavbarStaff from './navbarStaff.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/studenthome" element={[<Navbar />, <StudentHomepage />]} />
          <Route path="/feedback" element={[<Navbar/>,<Feedback/>]} />
          <Route path="/staffhome" element={<StaffHome />} />
          <Route path="/managebooks" element={[<NavbarStaff/>,<ManageBooks />]} />
          <Route path="/search" element={<Search />} />
          <Route path="/bookRequest" element={[<NavbarStaff/>,<BookRequest />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
