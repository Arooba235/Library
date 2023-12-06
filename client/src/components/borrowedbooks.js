import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserCheckoutPage() {
  const [checkouts, setCheckouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('username');

    const fetchCheckouts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/viewcheckout/${username}`);
        setCheckouts(response.data);
      } catch (error) {
        setError('Failed to fetch checkouts');
      }
    };

    if (username) {
      fetchCheckouts();
    }
  }, []);

  const handleReturn = async (checkoutId) => {
    try {
      await axios.post('http://localhost:5000/returnbook', {checkoutId});
      const username = localStorage.getItem('username');
      const response = await axios.get(`http://localhost:5000/viewcheckout/${username}`);
      setCheckouts(response.data);
    } catch (error) {
      setError('Failed to return the book');
    }
  };

  return (
    <div>
      <h2>Checkout Details</h2>
      {error && <div>{error}</div>}
      {checkouts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Issue Date</th>
              <th>Return Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {checkouts.map((checkout) => (
              <tr key={checkout._id}>
                <td>{checkout.title}</td>
                <td>{checkout.author}</td>
                <td>{checkout.genre}</td>
                <td>{new Date(checkout.issueDate).toLocaleDateString()}</td>
                <td>{new Date(checkout.returnDate).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleReturn(checkout._id)}>Return</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No checkouts available.</div>
      )}
    </div>
  );
}

export default UserCheckoutPage;
