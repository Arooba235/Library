// import logo from './logo.svg';
// import './App.css';
import StudentHome from './components/StudentHome.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Search from './components/Search.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
