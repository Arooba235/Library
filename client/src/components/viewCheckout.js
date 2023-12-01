import { Link } from "react-router-dom";
import React, { useState,useEffect  } from 'react';
import axios from 'axios';

function ViewCheckout(props){
    const [showCheckouts, setshowCheckouts] = useState([]);  
    const [error, setError] = useState('');
    useEffect(() => {
        const viewcheck = async () => {
          try {
            const response = await axios.get('http://localhost:5000/viewcheckout');
            console.log(response);
            setshowCheckouts(response.data); 
          } catch (error) {
            setError('Failed to fetch checkouts');
          }
        };
      
        viewcheck();
      }, []);
    
    return (
        <div>
      <h2>View Checkout</h2>
      {error && <div>{error}</div>}
      {showCheckouts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Issue Date</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {showCheckouts.map((checkout, index) => (
              <tr key={index}>
                <td>{checkout.studentName}</td>
                <td>{checkout.title}</td>
                <td>{checkout.author}</td>
                <td>{checkout.genre}</td>
                <td>{new Date(checkout.issueDate).toLocaleDateString()}</td>
                <td>{new Date(checkout.returnDate).toLocaleDateString()}</td>
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
export default ViewCheckout;