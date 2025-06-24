const express = require('express');
const { handleController } = require('../controller/book.controller');
const router = express.Router();

router.post('/add', handleController);
router.get('/all', async (req, res) => {
    // Fetch books from your data source, e.g., a database or in-memory array
    // Example with an in-memory array (replace with your actual data source):
    // const books = await getBooksFromDatabase(); // Implement getBooksFromDatabase to fetch from DB
    const books = await require('../models/book.model').find({});
    res.json(books);
});

module.exports = router;