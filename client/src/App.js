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
import FeedbackStaff from './components/feedbackStaff.js';
import ViewCheckout from './components/viewCheckout.js';
import ManagerHome from './components/ManagerHome.js';
import NavbarManager from './navbarManager.js';
import FeedbackManager from './components/feedbackManager.js';
import ManageStaffInfo from './components/manageStaffInfo.js';
import BudgetManagement from './components/budgetManagement.js';
import Donations from './components/donations.js';
// import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserCheckoutPage from './components/borrowedbooks.js';
import ViewFine from './components/ViewFine.js';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  // Function to handle login and set authentication status
  const handleLogin = () => {
    // Assume authentication logic here
    // For simplicity, let's set authenticated to true
    setAuthenticated(true);
  };

  // Function to handle logout and set authentication status
  const handleLogout = () => {
    // Assume logout logic here
    // For simplicity, let's set authenticated to false
    setAuthenticated(false);
  };

  // Route guard function to check if the user is authenticated
  const requireAuth = (element) => {
    console.log('Authenticated:', authenticated);
  return authenticated ? element : <Navigate to="/" />;
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/studenthome" element={requireAuth([<Navbar />, <StudentHomepage />])} />
          <Route path="/feedback" element={requireAuth([<Navbar/>,<Feedback/>])} />
          <Route path="/borrowed" element={requireAuth([<Navbar/>,<UserCheckoutPage/>])} />
          <Route path="/fine" element={requireAuth([<Navbar/>,<ViewFine/>])} />
          <Route path="/search" element={<Search />} />

          <Route path="/staffhome" element={requireAuth(<StaffHome />)} />
          <Route path="/managebooks" element={requireAuth([<NavbarStaff/>,<ManageBooks />])} />          
          <Route path="/bookRequest" element={requireAuth([<NavbarStaff/>,<BookRequest />])} />
          <Route path="/feedbackStaff" element={requireAuth([<NavbarStaff/>,<FeedbackStaff />])} />          
          <Route path="/checkout" element={requireAuth([<NavbarStaff/>,<ViewCheckout />])} />
          
          <Route path="/managerhome" element={requireAuth(<ManagerHome />)} />
          <Route path="/managebooksManager" element={requireAuth([<NavbarManager/>,<ManageBooks />])} />        
          <Route path="/checkoutManager" element={requireAuth([<NavbarManager/>,<ViewCheckout />])} />          
          <Route path="/bookRequestManager" element={requireAuth([<NavbarManager/>,<BookRequest />])} />
          <Route path="/feedbackManager" element={requireAuth([<NavbarManager/>,<FeedbackManager/>])} />
          <Route path="/manageStaffInfo" element={requireAuth([<NavbarManager/>,<ManageStaffInfo/>])} />
          <Route path="/budgetmanagement" element={requireAuth([<NavbarManager/>,<BudgetManagement/>])} />
          <Route path="/donations" element={<Donations/>} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
