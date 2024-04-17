const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

//books
// GET
router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
// POST
router.post('/', bookController.add);
// PUT 
router.put('/:id', bookController.updateById);
// DELETE 
router.delete('/:id', bookController.deleteById);

module.exports = router;
