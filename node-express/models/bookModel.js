class Book {
    constructor(id, name, price, authorId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.authorId = authorId;
    }
}

const books = [
    new Book(1, "Harry Potter and the Philosopher's Stone", 10.99, 1),
    new Book(2, "A Game of Thrones", 15.99, 2),
    // Add more books as needed
];

module.exports = { Book, books };
