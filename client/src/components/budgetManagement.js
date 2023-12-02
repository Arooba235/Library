import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function BudgetManagement() {
  const [existingBudget, setExistingBudget] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);
  const [staffSalary, setStaffSalary] = useState(0);
  const [managerSalary, setManagerSalary] = useState(0);
  const [numBooks, setNumBooks] = useState(0);
  const [bookPrice, setBookPrice] = useState(0);



  useEffect(() => {
    // Fetch the existing budget when the component mounts
    const fetchExistingBudget = async () => {
      try {
        const response = await axios.get('http://localhost:5000/budget');
        setExistingBudget(response.data.amount);
      } catch (error) {
        console.error('Error fetching existing budget:', error);
      }
    };

    // Fetch the count of staff members
    const fetchStaffCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users/staff/count');
        setStaffCount(response.data.count);
      } catch (error) {
        console.error('Error fetching staff count:', error);
      }
    };

    // Fetch the count of managers
    const fetchManagerCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users/manager/count');
        setManagerCount(response.data.count);
      } catch (error) {
        console.error('Error fetching manager count:', error);
      }
    };

    fetchExistingBudget();
    fetchStaffCount();
    fetchManagerCount();
  }, []);

  const calculateMonthlyExpense = () => {
    return staffCount * staffSalary + managerCount * managerSalary + numBooks * bookPrice;
  };
  const calculateNumMonths = () => {
    return existingBudget / (staffCount * staffSalary + managerCount * managerSalary + numBooks * bookPrice);
  };


  return (
    <div>
      <h1>Budget Management</h1>
      <p>Existing Budget: {existingBudget}</p>
      <p>Staff Members Count: {staffCount}</p>
      <p>Managers Count: {managerCount}</p>
      <div>
        <label>
          Staff Salary:
          <input type="number" value={staffSalary} onChange={(e) => setStaffSalary(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Manager Salary:
          <input type="number" value={managerSalary} onChange={(e) => setManagerSalary(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Number of books you plan to acquire every month:
          <input type="number" value={numBooks} onChange={(e) => setNumBooks(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Average price of each book:
          <input type="number" value={bookPrice} onChange={(e) => setBookPrice(e.target.value)} />
        </label>
      </div>
      <p>Monthly Expense: {calculateMonthlyExpense()}</p>
      <p>Number of months library can be run with the existing budget: {calculateNumMonths()}</p>
    </div>
  )
}

export default BudgetManagement;