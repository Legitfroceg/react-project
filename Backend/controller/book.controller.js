const Book = require('../models/book.model');

const handleController = async (req, res) => {
    try {
        const { BookName, Author, cateogory, price, Date } = req.body;

        // Validate required fields
        if (!BookName || !Author || !cateogory || !price || !Date) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new book instance
        const newBook = new Book({
            BookName,
            Author,
            cateogory,
            price,
            Date
        });

        // Save the book to the database
        await newBook.save();

        // Respond with the created book
        res.status(201).json(newBook);
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = { handleController };