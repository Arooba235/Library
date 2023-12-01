import React, { useState } from 'react';
import axios from 'axios';

function ManageUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/manageuser', {
        username,
        password,
        usertype,
      });

      setMessage(response.data.message);
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setError('Failed to manage user');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div>
      <h2>Manage User</h2>
      {message && <div>{message}</div>}
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="usertype">User Type:</label>
          <input type="text" id="usertype" value={usertype} onChange={(e) => setUsertype(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ManageUser;
