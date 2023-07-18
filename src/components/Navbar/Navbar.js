import React from 'react';
import logo from '../../assets/logo.png'; // Adjust the path according to the actual location
import './navbar.css';

const Navbar = () => {
  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    if (targetId === 'about-section') {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className="contact-section">
        {/* Add your ContactForm component here */}
      </div>
      <div className='nav-links'>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#project-section" onClick={(event) => handleLinkClick(event, 'project-section')}>Projects</a>
          </li>
          <li>
            <a href="#about-section" onClick={(event) => handleLinkClick(event, 'about-section')}>About</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1V6-ZQRjT0GEzw2VA5pgYMWLQNLcUXovD/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
          <li>
            <a href="#contact-form-section" onClick={(event) => handleLinkClick(event, 'contact-form-section')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
