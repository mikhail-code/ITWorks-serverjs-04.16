class Author {
    constructor(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
}

const authors = [
    new Author(1, "J.K. Rowling", "1965-07-31"),
    new Author(2, "George R.R. Martin", "1948-09-20"),
    // Add more authors as needed
];

module.exports = { Author, authors };
