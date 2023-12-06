import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FeedbackManager() {
  const username = localStorage.getItem('username');
  const [Feedback, setFeedback] = useState([]);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showFeedbackList, setShowFeedbackList] = useState(false);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/feedbackmanager');
      setFeedback(response.data);
    } catch (err) {
      setError('Failed to fetch Feedbacks');
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);
  
  return (
    <div>
      <h1>Feedback List</h1>
      <div className="buttons-container">
        <button onClick={() => setShowFeedbackList(!showFeedbackList)} className="action-button">
          Show Available Feedbacks
        </button>
        {showFeedbackList && (
          <></>
        )}
      </div>  
      {showFeedbackList && Feedback.length > 0 && !showAddForm && (
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Staff</th>
              <th>Staff Rating</th>
              <th>Book Quality</th>
              <th>Book Variety</th>
              <th>Checkout Experience</th>
            </tr>
          </thead>
          <tbody>
            {Feedback.map((feedbacks) => (
              <tr key={feedbacks._id}>
                <td>{feedbacks.studentId}</td>
                <td>{feedbacks.staffId}</td>
                <td>{feedbacks.staffRating}</td>
                <td>{feedbacks.bookQuality}</td>
                <td>{feedbacks.bookVariety}</td>
                <td>{feedbacks.checkoutExperience}</td>
                
                {/* <td>
                  <button onClick={() => handleBorrow(book.title,book.author,book.genre)}>Borrow</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FeedbackManager;
