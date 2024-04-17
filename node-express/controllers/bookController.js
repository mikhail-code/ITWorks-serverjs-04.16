const { books } = require('../models/bookModel');
const { authors } = require('../models/authorModel');

// GET /books
const getBooks = (req, res) => {
    const booksWithAuthors = books.map(book => { //The map() method iterates through each element in the array and applies a function to each element.
        const author = authors.find(author => author.id === book.authorId);
        return { ...book, author };
    });
    res.json(booksWithAuthors);
};
// The res.json() method takes whatever data you provide and converts it into a JSON string using JavaScript's JSON.stringify() function.
// This means it can handle various data types like objects, arrays, strings, numbers, booleans, and even null and undefined.


const getBook = (req, res) => {
    const { id } = req.params;
    const book = books.find(book => book.id.toString() === id);
    if (!book) {
        return res.status(404).send('Book not found');
    }
    
    // Find the author and include it in the book object
    const author = authors.find(author => author.id === book.authorId);
    const bookWithAuthor = { ...book, author }; // Spread operator to merge book and author objects

    res.json(bookWithAuthor);
}

const addNewBook = (req, res) => {
    const newBook = req.body;
    
}

module.exports = { getBooks, getBook };
