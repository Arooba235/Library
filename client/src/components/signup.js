import '../styles/signup.css'
import React from 'react';
import { useState } from 'react';

const Signup = (prop)=> {
  const [userType, setUserType] = useState(''); // 'student', 'staff', or 'manager'

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const renderFormFields = () => {
    switch (userType) {
      case 'student':
        return (
          <div>
            <label>Student ID:</label>
            <input type="text" placeholder="Enter Student ID" />
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
            <label>Email:</label>
            <input type="text" placeholder="Enter your email" />
            <label>Contact:</label>
            <input type="text" placeholder="Enter your contact" />
            <label>Password:</label>
            <input type="text" placeholder="Enter your Password" />
          </div>
        );
      case 'staff':
        return (
          <div>
            <label>Staff ID:</label>
            <input type="text" placeholder="Enter Staff ID" />
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
            <label>Email:</label>
            <input type="text" placeholder="Enter your email" />
            <label>Contact:</label>
            <input type="text" placeholder="Enter your contact" />
            <label>Salary:</label>
            <input type="text" placeholder="Enter your Salary" />
            <label>Location:</label>
            <input type="text" placeholder="Enter your email" />
            <label>Password:</label>
            <input type="text" placeholder="Enter your Password" />
          </div>
        );
      case 'manager':
        return (
          <div>
            <label>Manager ID:</label>
            <input type="text" placeholder="Enter Manager ID" />
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
            <label>Email:</label>
            <input type="text" placeholder="Enter your email" />
            <label>Contact:</label>
            <input type="text" placeholder="Enter your contact" />
            <label>Password:</label>
            <input type="text" placeholder="Enter your Password" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <div>
        <label>Select User Type:</label>
        <select onChange={handleUserTypeChange}>
          <option value="">Select User Type</option>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
          <option value="manager">Manager</option>
        </select>
      </div>

      {userType && renderFormFields()}

      {/* Add a submit button and handle form submission logic */}
      <button>Submit</button>
    </div>
  );
}

export default Signup