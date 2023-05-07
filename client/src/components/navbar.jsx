import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div className="flex flex-row justify-center space-x-7">

                <div className="bg-green-700 p-4 fixed top-0 w-full flex flex-row justify-center space-x-7">
               <Link to="/">
                     <img src="./r3plastic.png" alt="Company Logo" className="fixed -left-5 -top-5 h-40 w-70  cursor-pointer" />
                </Link>
                <Link to='/aboutus'>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">About Us</button>
                </Link>
                <Link to='/faq'>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">FAQ</button>
                </Link>
                <Link to='/contact'>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Contact Us</button>
                </Link>
                <Link to='/coherebot'>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Cohere Bot</button>
                </Link>
                <Link to="/register">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Register</button>
                </Link>
            
           
        </div>
        </div>
    );
}
