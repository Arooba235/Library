// import "../styles/StudentHomepage.css";
import './StudentHomepage.css';
import { Link } from "react-router-dom";
import React, { useState,useEffect  } from 'react';
import axios from 'axios';


function StudentHomepage(props) {
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');
    const [Books, setBooks] = useState([]);
    const [error, setError] = useState('');
    // const [success, setSuccess] = useState(false);
    // const [selectedBooks, setSelectedBooks] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showBookList, setShowBookList] = useState(false);
    // const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
    // Function to fetch the contact list from the server
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getbooks');
        setBooks(response.data);
      } catch (err) {
        setError('Failed to fetch books');
      }
    };
  
    useEffect(() => {
      // Fetch the contact list when the component mounts
      fetchBooks();
    }, []);
  
    // // Function to update a contact
    // const handleUpdateContact = async (contact) => {
    //   try {
    //     const updatedName = prompt('Enter updated name:', contact.name);
    //     const updatedNumber = prompt('Enter updated number:', contact.number);
  
    //     if (!updatedName || !updatedNumber) {
    //       setError('Name and number cannot be empty');
    //       return;
    //     }
  
    //     const response = await axios.put(`http://localhost:5000/updateContact/${contact._id}`, {
    //       name: updatedName,
    //       number: updatedNumber,
    //     });
  
    //     setBooks(
    //       Books.map((c) => (c._id === response.data._id ? { ...c, name: response.data.name, number: response.data.number } : c))
    //     );
  
    //     setError('');
    //   } catch (err) {
    //     setError('Failed to update contact');
    //   }
    // };
  
    // const handleAddContact = async (e) => {
    //   e.preventDefault();
  
    //   try {
    //     const response = await axios.post('http://localhost:5000/addContact', { name, number });
    //     setSuccess(true);
    //     setError('');
    //     setBooks([...Books, response.data]);
    //     setName('');
    //     setNumber('');
    //   } catch (err) {
    //     setSuccess(false);
    //     setError('Failed to add contact');
    //   }
    // };
  
    // const handleDeleteBooks = async () => {
    //   try {
    //     const selectedIds = selectedBooks.map((contact) => contact._id);
    //     await axios.delete(`http://localhost:5000/deleteContact/${selectedIds[0]}`);
    //     setBooks(Books.filter((contact) => !selectedIds.includes(contact._id)));
    //     setSelectedBooks([]);
    //     setShowDeleteConfirm(false);
    //   } catch (err) {
    //     setError('Failed to delete Books');
    //   }
    // };
  
    // const handleCheckboxChange = (e, contact) => {
    //   const { checked } = e.target;
    //   if (checked) {
    //     setSelectedBooks([...selectedBooks, contact]);
    //   } else {
    //     setSelectedBooks(selectedBooks.filter((selectedContact) => selectedContact._id !== contact._id));
    //   }
    // };
  
    return (
      <div>
        <h1>Books List</h1>
        <div className="buttons-container">
          {/* <button onClick={() => setShowAddForm(!showAddForm)} className="action-button">
            {showAddForm ? 'Cancel' : 'Add Contact'}
          </button> */}
          <button onClick={() => setShowBookList(!showBookList)} className="action-button">
            Show Available Books
          </button>
          {showBookList && (
            <>
              {/* <button onClick={() => setShowDeleteConfirm(true)} className="action-button">
                Delete
              </button> */}
            </>
          )}
        </div>
  
        {/* {showAddForm && (
          <form onSubmit={handleAddContact}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="number">Number:</label>
              <input type="text" id="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
            </div>
            {error && <div>{error}</div>}
            {success && <div>Contact added successfully!</div>}
            <button type="submit">Add Contact</button>
          </form>
        )} */}
  
        {showBookList && Books.length > 0 && !showAddForm && (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                {/* {showDeleteConfirm && <th>Action</th>} */}
              </tr>
            </thead>
            <tbody>
              {Books.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  {/* {showDeleteConfirm && (
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedBooks.some((selectedContact) => selectedContact._id === contact._id)}
                        onChange={(e) => handleCheckboxChange(e, contact)}
                      />
                    </td>
                  )} */}
                  {/* <td>
                    <button onClick={() => handleUpdateContact(contact)}>Update</button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
  
        {/* {showDeleteConfirm && selectedBooks.length > 0 && (
          <div>
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete the selected Books?</p>
            <button onClick={handleDeleteBooks}>Confirm Delete</button>
          </div>
        )} */}
      </div>
    );
  
}

export default StudentHomepage;
