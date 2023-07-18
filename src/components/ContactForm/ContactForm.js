// Navbar.js
import React from 'react';
import logo from '../../assets/logo.png'; // Adjust the path according to the actual location
import './navbar.css';
import ContactForm from './ContactForm'; // Adjust the relative path based on your folder structure

const Navbar = () => {
  return (
    <nav>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className="contact-section">
        <ContactForm />
      </div>
      <div className='nav-links'>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/profile-pic">About</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1V6-ZQRjT0GEzw2VA5pgYMWLQNLcUXovD/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
