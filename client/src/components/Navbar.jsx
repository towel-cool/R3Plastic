import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div>
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
        </div>
    );
}
