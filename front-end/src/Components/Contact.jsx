import React from 'react';

import './Contact.css'; // Assuming you have a CSS file for styling


const Contact = () => {
    

    return (
        <div>
            <h2 id='heading'>Contact Information</h2>
            <div id='detail'>
            <ul>
                <li>Email: lorem.ipsum@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Lorem Ipsum St, Dolor Sit, AM 12345</li>
            
                <form action="">
                    name: <input id='entr1' type="text" name="name" placeholder="Your Name" required />
                    <br />  
                    email: <input id='entr1' type="email" name="email" placeholder="Your Email" required />    
                    <br />
                    <button id='btn'>Submit</button>
                </form>

            </ul>
            </div>
        </div>
    );
};

export default Contact;
