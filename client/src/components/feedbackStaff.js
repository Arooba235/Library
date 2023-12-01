import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FeedbackStaff() {
  const [averageFeedback, setAverageFeedback] = useState(null);
  const staffName = localStorage.getItem('staffname');
  useEffect(() => {
    axios.post('http://localhost:5000/feedbackStaff', { staffName })
      .then(response => {
        const feedbackData = response.data;
        const averageData = calculateAverage(feedbackData);
        setAverageFeedback(averageData);
      })
      .catch(error => {
        console.error(error);
      });
  }, [staffName]); 
  const calculateAverage = (feedbackData) => {
    if (feedbackData.length === 0) {
      return null;
    }
    const totalFeedback = feedbackData.reduce((acc, feedback) => {
      return {
        staffRating: acc.staffRating + feedback.staffRating,
        bookQuality: acc.bookQuality + feedback.bookQuality,
        bookVariety: acc.bookVariety + feedback.bookVariety,
        checkoutExperience: acc.checkoutExperience + feedback.checkoutExperience,
      };
    }, {
      staffRating: 0,
      bookQuality: 0,
      bookVariety: 0,
      checkoutExperience: 0,
    });

    const averageData = {
      staffRating: totalFeedback.staffRating / feedbackData.length,
      bookQuality: totalFeedback.bookQuality / feedbackData.length,
      bookVariety: totalFeedback.bookVariety / feedbackData.length,
      checkoutExperience: totalFeedback.checkoutExperience / feedbackData.length,
    };

    return averageData;
  };

  return (
    <div>
      <h1>Feedback for Staff: {staffName}</h1>
      {averageFeedback && (
        <div>
          <h2>Average Feedback</h2>
          <strong>Staff Rating:</strong> {averageFeedback.staffRating}<br />
          <strong>Book Quality:</strong> {averageFeedback.bookQuality}<br />
          <strong>Book Variety:</strong> {averageFeedback.bookVariety}<br />
          <strong>Checkout Experience:</strong> {averageFeedback.checkoutExperience}<br />
        </div>
      )}
    </div>
  );
}

export default FeedbackStaff;
