import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewFine() {
  const [fine, setFine] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('username');

    const fetchCheckouts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/fine/${username}`);
        setFine(response.data);
      } catch (error) {
        setError('Failed to fetch fine');
      }
    };

    if (username) {
      fetchCheckouts();
    }
  }, []);

  const handleReturn = async (fine) => {
    try {
      const username = localStorage.getItem('username');
      await axios.post('http://localhost:5000/donate', { amount:fine.Fine });
      await axios.post('http://localhost:5000/removeFine', { username });
      setFine((prevFine) => prevFine.filter((item) => item._id !== fine._id))
    } catch (error) {
      console.log(fine);
      setError('Failed to return the fine');
    }
  };

  return (
    <div>
      <h2>Fine Details</h2>
      {error && <div>{error}</div>}
      {fine.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {fine.map((fine) => (
              <tr key={fine._id}>
                <td>{fine.studentName}</td>
                <td>{fine.Fine}</td>
                <td>
                  <button onClick={() => handleReturn(fine)}>Submit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No Fine details</div>
      )}
    </div>
  );
}

export default ViewFine;
