import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate  } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/', { username: username, password: password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        
        onLogin()
        // window.location.href = '/';
        // Redirect based on usertype
        switch (response.data.usertype) {
          case 'student':
            localStorage.setItem('username', username);
            navigate(`/studenthome`);
            break;
          case 'staff':
            localStorage.setItem('staffname', username);
            navigate('/staffhome');
            break;
          case 'manager':
            navigate('/managerhome');
            break;
          default:
            navigate('/');
        }
      })
      .catch(error => {
        setErrorMessage(error.response.data.error);
      });
  }

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      <h1>
        Click on Register if you are a student and dont already have an account.
      </h1>
      <div>
        <Link to="/signup" className="nav-link">Register</Link>
      </div>
      <div>
        <Link to="/donations" className="nav-link">Donate</Link>
      </div>
    </div>
  );
}

export default Login;
