const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON body
app.use(express.json());

// Routes
const bookRoutes = require('./routes/bookRoutes'); // copy code from "./" into bookRoutes
app.use('/books', bookRoutes); // so when request is made on books/.. it will do code that we copied line above
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// + Data Model:Define the data structures in-memory:
// + Authors: An array of objects, each representing an author with properties like id, name, and dateOfBirth.
// + Books: An array of objects, each representing a book with properties like name, price, and authorId that references an author’s id.

// + API Endpoints:Implement the following RESTful endpoints:
// + GET /books: Retrieve a list of all books, optionally include author details embedded in the response.
// + GET /books/:id: Retrieve a specific book by its ID, including author details.
// + POST /books: Create a new book (ensure that the authorId exists in the authors array before adding the book).
// + PUT /books/:id: Update an existing book by its ID.
// + DELETE /books/:id: Delete a book by its ID.

// +++ Validation and Error Handling:
// Validate name and price during book creation and updates. 
// Ensure authorId exists in the authors array before saving a new book.
// Implement error handling to respond appropriately when requests fail validation checks or when resources are not found.

// Deliverables:
// Source code committed to a version control repository.