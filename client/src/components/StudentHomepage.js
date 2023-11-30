// import "../styles/StudentHomepage.css";
import './StudentHomepage.css';
import { Link } from "react-router-dom";
import React, { useState,useEffect  } from 'react';
import axios from 'axios';


function StudentHomepage(props) {
    const username = localStorage.getItem('username');
    const [Books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [showBookList, setShowBookList] = useState(false);

    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getbooks');
        setBooks(response.data);
      } catch (err) {
        setError('Failed to fetch books');
      }
    };
  
    useEffect(() => {
      fetchBooks();
    }, []);
    const handleBorrow = async (title,author,genre) => {
      try {
        const studentName = username; 
        console.log('handle borrow')
        await axios.post('http://localhost:5000/borrow', { studentName, title,author,genre});
        setBooks(prevBooks => prevBooks.filter(book => book.title !== title));
        console.log('Book borrowed successfully');
      } catch (error) {
        console.error('Error borrowing book:', error);
      }
    };
    
    return (
      <div>
        <h1>Books List</h1>
        <div className="buttons-container">
          <button onClick={() => setShowBookList(!showBookList)} className="action-button">
            Show Available Books
          </button>
          {showBookList && (
            <></>
          )}
        </div>  
        {showBookList && Books.length > 0 && !showAddForm && (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {Books.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  
                  <td>
                    <button onClick={() => handleBorrow(book.title,book.author,book.genre)}>Borrow</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  
}

export default StudentHomepage;
