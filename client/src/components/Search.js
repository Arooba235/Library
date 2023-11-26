// import { useState } from 'react';
// import axios from 'axios';

// function Search() {
//   const [username, setUsername] = useState('');
//   const [user, setUser] = useState(null);

//   async function handleSubmit(event) {
//     event.preventDefault();
//     const response = await axios.get(`/search/${username}`);
//     setUser(response.data);
//   }

//   return (
//     <div>
//         <h1>Enter the username to know the wins and total points</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={event => setUsername(event.target.value)}
//           />
//         </label>
//         <button type="submit">Search</button>
//       </form>
//       {user && (
//         <div>
//           <h2>{user.username}</h2>
//           <p>{user.wins}</p>
//           <p>{user.totalpoints}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;


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
