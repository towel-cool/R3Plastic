import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div className=
        "flex flex-row justify-center space-x-7">
            <h1>EcoHaul</h1>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/aboutus'>
                <button>About Us</button>
            </Link>
            <Link to='/faq'>
                <button>FAQ</button>
            </Link>
            <Link to='/contact'>
                <button>Contact</button>
            </Link>
            <Link to='/coherebot'>
                <button>Cohere Bot</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
}
