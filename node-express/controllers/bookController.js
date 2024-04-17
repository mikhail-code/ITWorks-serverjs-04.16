const Joi = require('joi');

const { books } = require('../models/bookModel');
const { authors } = require('../models/authorModel');

// GET /books
const getAll = (req, res) => {
    const booksWithAuthors = books.map(book => { //The map() method iterates through each element in the array and applies a function to each element.
        const author = authors.find(author => author.id === book.authorId);
        return { ...book, author };
    });
    res.json(booksWithAuthors);
};
// The res.json() method takes whatever data you provide and converts it into a JSON string using JavaScript's JSON.stringify() function.
// This means it can handle various data types like objects, arrays, strings, numbers, booleans, and even null and undefined.


const getById = (req, res) => {
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

const validateBook = (newBookData) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      authorId: Joi.number().required(),
    });
    const { error } = schema.validate(newBookData);
    return error;
  };

const add = (req, res) => {
  const newBook = req.body;
  const validationError = validateBook(newBook);
  if (validationError) {
    return res.status(400).send(validationError.details[0].message);
  }

  // Add the new book to the model (replace with database interaction if needed)
  books.push(newBook);

  // Send a success response with the newly created book
  res.status(201).json(newBook);
};

// + PUT /books/:id: Update an existing book by its ID.
const updateById = (req, res) => {
    const { id } = req.params;
    const updatedBook = req.body;
    const bookIndex = books.findIndex(book => book.id.toString() === id); // Find the index of the book to update
  
    if (bookIndex === -1) {
      return res.status(404).send('Book not found');
    }
  
    const validationError = validateBook(updatedBook);
    if (validationError) {
      return res.status(400).send(validationError.details[0].message);
    }
  
    books[bookIndex] = { ...updatedBook, id: books[bookIndex].id }; // Preserve original ID
  
    res.status(200).json(updatedBook);
  };
  
// + DELETE /books/:id: Delete a book by its ID.
  const deleteById = (req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex(book => book.id.toString() === id); 

    if (bookIndex === -1) {
      return res.status(404).send('Book not found');
    }

  books.splice(bookIndex, 1); 

  res.status(204).json({ message: 'Book deleted successfully' }); // 204 No Content
  };

module.exports = { getAll, getById, add, updateById, deleteById };
