import './StudentHomepage.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentHomepage(props) {
  const username = localStorage.getItem('username');
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleBorrow = async (title, author, genre) => {
    try {
      const studentName = username;
      await axios.post('http://localhost:5000/borrow', { studentName, title, author, genre });
      setBooks(prevBooks => prevBooks.filter(book => book.title !== title));
      console.log('Book borrowed successfully');
    } catch (error) {
      console.error('Error borrowing book:', error);
    }
  };

  useEffect(() => {
    // Filter books based on the search term
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchTerm, books]);

  return (
    <div>
      <h1>Books List</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by book name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredBooks.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>
                  <button onClick={() => handleBorrow(book.title, book.author, book.genre)}>Borrow</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {filteredBooks.length === 0 && <p>No matching books found.</p>}
    </div>
  );
}

export default StudentHomepage;
