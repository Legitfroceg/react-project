import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link id='lin'  to="/">Welcome</Link>
                </li>
                <li>
                    <Link id='lin' to="/about">About</Link>
                </li>
                <li>
                    <Link id='lin' to="/contact">Contact</Link>
                </li>
                <li>
                    <Link id='lin' to="/book">Book Details</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;