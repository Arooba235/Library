import '../styles/login.css'
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
            <input className="user-inp" type="text" placeholder="Name" required/>
            <input className="user-inp" type="text" placeholder="Contact" required/>
            <input className="pass-inp" type="text" placeholder="Password" required/>
          </div>
        );
      case 'staff':
        return (
          <div>
            <input className="user-inp" type="text" placeholder="Name" required/>
            <input className="user-inp" type="text" placeholder="Contact" required/>
            <input className="pass-inp" type="text" placeholder="Password" required/>
          </div>
        );
      case 'manager':
        return (
          <div>
            <input className="user-inp" type="text" placeholder="Name" required/>
            <input className="user-inp" type="text" placeholder="Contact" required/>
            <input className="pass-inp" type="text" placeholder="Password" required/>
          </div>
        );
      default:
        return null;
    }
  };
  const myStyle = {
    background: 'black',
    color: 'white',
  };

  return (
    <div  className="login-page" style={myStyle}>      
      <div className="login-header"> Library Management <span class="lib-name">System</span></div>
      <div className='partition'></div>
      <form className='form' >
        <h2>Signup Page</h2>
        <div>
          <label >Select User Type:</label>
          <select onChange={handleUserTypeChange}>
            <option className="user-inp" value="" required>Select User Type</option>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        {userType && renderFormFields()}

        {/* Add a submit button and handle form submission logic */}
        <button className="sub-button">Submit</button>
      </form>
    </div>
  );
}

export default Signup