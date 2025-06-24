import React from 'react'
import axios from 'axios';

import './Bookdetails.css' 
import { useEffect } from 'react';


const Bookdetails = () => {
    const [books, setBooks] = React.useState({
        BookName: "",
        Author: "",
        cateogory: "",
        price: "",
        Date: ""

    });
const [booklist, setBooklist] = React.useState([]);
React.useEffect(() => {
    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/books/all');
            setBooklist(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };
    fetchBooks();
}, []);

const handleChange = (e) => {
    const { name, value } = e.target;
    setBooks({
        ...books,
        [name]: name === "price" ? Number(value) : value
    });
};
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log('Submitting book:', books);
        const response = await axios.post('http://localhost:3000/books/add', books);
        console.log('Book added successfully:', response.data);
        // Optionally, you can reset the form or fetch the updated list of books
        setBooks({
            BookName: "",
            Author: "",
            cateogory: "", 
            price: "",
            Date: ""
        });
    } catch (error) {
        console.error('Error adding book:', error);
    }
};

useEffect(() => {
    const handleWheel = (e) => {
        window.scrollBy({ top: e.deltaY, behavior: 'smooth' });
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
}, []);

return (
    <div>
        <h1 id='heading'>Book Details</h1>
        <form onSubmit={handleSubmit} id='form'>
            <div className='form-group'>
                <label>Book Name: </label>
                <input placeholder='Enter name: ' id='entry' type="text" name="BookName" value={books.BookName} onChange={handleChange} />
                <label>Author: </label>
                <input  placeholder='Enter Author name: ' id='entry' type="text" name="Author" value={books.Author} onChange={handleChange} />
                <label>Cateogory: </label>
                <input placeholder='Enter Cateogory: ' id='entry' type="text" name="cateogory" value={books.cateogory} onChange={handleChange}/>
                <label>Price: </label>
                <input placeholder='Enter Price: ' id='entry' type="number" name="price" value={books.price} onChange={handleChange} />
                <br />
                <label>Publish Date: </label>
                <input color='white' id='entry' type="date" name="Date" value={books.Date} onChange={handleChange} />
            </div>
            <button  id='bt1' type="submit">Submit</button>
        </form>
        <br />
        <div className='table-container'>
            <table  className='table'>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Publish Date</th>
                    </tr>
                </thead>
                <tbody>
                    {booklist.map((books, index) => (
                        <tr key={index}>
                            <td>{books.BookName}</td>
                            <td>{books.Author}</td>
                            <td>{books.cateogory}</td>
                            <td>{books.price}</td>
                            <td>{books.Date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     
    </div>
)
}

export default Bookdetails
