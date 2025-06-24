const express = require('express');
const dbconnect = require('./database');
dbconnect();
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const bookRouter = require('./routes/book.route');
app.get('/', (req, res) => {
    res.send('Welcome to the Book Store API');
});
app.post('/add', async (req, res) => {
    const { BookName, Author, category, price, Date } = req.body;
    console.log('Received data:', req.body);

    // Validate required fields
    if (!BookName || !Author || !category || !price || !Date) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newBook = {
            BookName,
            Author,
            category,
            price,
            Date
        };
        // Here you would typically save the book to the database
        // For now, we will just return the new book object
        res.status(201).json(newBook);
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
    
app.use('/books', bookRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});