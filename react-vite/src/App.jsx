import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Optional for styling

function App() {
  const [books, setBooks] = useState([]); // Initialize books with an empty array
  const [chosenBook, setBook] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/books');
        const responseBook = await axios.get('/api/books/1');
        if (response.data.length === 0) {
          console.error('No books found');
          // Optionally display a message to the user indicating no books
        } else {
          setBooks(response.data);
          setBook(responseBook.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Books</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <strong>{book.name}</strong> by {book.author.name}
              <li>Also here is book with id 1: {chosenBook.name} written by {chosenBook.author.name}</li>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
