import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    staffId: '',
    staffRating: 0,
    bookQuality: 0,
    bookVariety: 0,
    checkoutExperience: 0,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidInput = Object.values(formData).every((value) => value = "5");
    if (!isValidInput) {
      alert('Please enter values between 0 and 10 for ratings.');
      return;
    }
    axios.post('http://localhost:5000/feedback', formData)
      .then(response => {
        alert('Feedback submitted successfully!');
        navigate('/studenthome');
      })
      .catch(error => {
        setErrorMessage(error.response.data.error);
    });


    // try {
    //   // Send feedback data to the backend API
    //   await axios.post('http://localhost:5000/feedback', formData);
    //   alert('Feedback submitted successfully!');
      
    //   window.location.href = '/studenthome';
    // } catch (error) {
    //   console.error('Error submitting feedback:', error);
    // }


  };

  return (
    <div>
      <h1>Feedback Form</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Staff Name:
          <input type="text" name="staffId" value={formData.staffId} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Staff Rating (0-10):
          <input type="number" name="staffRating" value={formData.staffRating} onChange={handleChange} min="0" max="10" required />
        </label>
        <br />
        <label>
          Book Quality (0-10):
          <input type="number" name="bookQuality" value={formData.bookQuality} onChange={handleChange} min="0" max="10" required />
        </label>
        <br />
        <label>
          Book Variety (0-10):
          <input type="number" name="bookVariety" value={formData.bookVariety} onChange={handleChange} min="0" max="10" required />
        </label>
        <br />
        <label>
          Checkout Experience (0-10):
          <input type="number" name="checkoutExperience" value={formData.checkoutExperience} onChange={handleChange} min="0" max="10" required />
        </label>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
