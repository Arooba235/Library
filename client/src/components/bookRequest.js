import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookRequest() 
{
    const [requests, setRequests] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      fetchRequests();
    }, []);
  
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getrequests');
        setRequests(response.data);
      } catch (err) {
        setError('Failed to fetch requests');
      }
    };
  
    const processRequest = async (requestId, action) => {
      try {
        await axios.post('http://localhost:5000/processrequest', { requestId, action });
        fetchRequests();
      } catch (error) {
        console.error('Error processing request:', error);
        setError('Failed to process request');
      }
    };
  
    return (
      <div>
        <h1>Requests List</h1>
        {error && <div>{error}</div>}
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Student Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request._id}>
                <td>{request.title}</td>
                <td>{request.author}</td>
                <td>{request.genre}</td>
                <td>{request.studentName}</td>
                <td>
                  <button onClick={() => processRequest(request._id, 'accept')}>Accept</button>
                  <button onClick={() => processRequest(request._id, 'reject')}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default BookRequest;