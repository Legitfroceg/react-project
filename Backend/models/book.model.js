const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    BookName: {
        type: String,
        required: true,
        
    },
    Author: {
        type: String,
        required: true,
    },
    cateogory: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,   
});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;