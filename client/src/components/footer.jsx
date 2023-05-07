import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'


export default function Footer() {
    return (
        <div className=
        "flex flex-row justify-center space-x-7">
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/aboutus'>About Us</Link> 
            <a href="https://github.com/towel-cool/Eco-Haul">
            <i className="fab fa-github"><FaGithub />GitHub</i>
            </a>
        </div>
    );
}