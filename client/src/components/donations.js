import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Donations() {
  const [existingBudget, setExistingBudget] = useState(0);
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    const fetchExistingBudget = async () => {
      try {
        const response = await axios.get('http://localhost:5000/budget');
        setExistingBudget(response.data.amount);
      } catch (error) {
        console.error('Error fetching existing budget:', error);
      }
    };

    fetchExistingBudget();
  }, []);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddBudget = async () => {
    if (!amount || isNaN(amount)) {
      setErrorMessage('Please enter a valid amount');
      return;
    }
    try {
      await axios.post('http://localhost:5000/donate', { amount });
      setExistingBudget(existingBudget + parseFloat(amount));
      setAmount('');
      setErrorMessage(''); 
    } catch (error) {
      console.error('Error adding budget amount:', error);
      alert('Failed to add budget amount');
    }
  };

  return (
    <div>
      <div>
        <Link to="/" className="nav-link">Home</Link>
      </div>
      <h1>Donate for a Cause</h1>
      <p>Existing Budget: {existingBudget}</p>
      <label>
        Donate Amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <button onClick={handleAddBudget}>Add to Budget</button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
}

export default Donations;