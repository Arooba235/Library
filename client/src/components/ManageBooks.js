import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManageBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/addbook', { title, author, genre })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  return (
    <div>
      <h2>Manage Books</h2>
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" value={author} onChange={handleAuthorChange} />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input type="text" id="genre" value={genre} onChange={handleGenreChange} />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default ManageBooks;
