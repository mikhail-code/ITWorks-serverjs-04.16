const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET /books
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBook);

//POST /books
router.post('/', bookController.addNewBook);

module.exports = router;
