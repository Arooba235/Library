
import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [username, setUsername] = useState('');
  const [wins, setWins] = useState(null);
  const [totalpoints, setTotalpoints] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/search/${username}');
      const data = response.data;
      setWins(data.wins);
      setTotalpoints(data.totalpoints);
    } catch (error) {
      console.log(error);
      setWins(null);
      setTotalpoints(null);
      alert('User not found');
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {wins && <p>Wins: {wins}</p>}
      {totalpoints && <p>Total Points: {totalpoints}</p>}
    </div>
  );
}

export default Search;
