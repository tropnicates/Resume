import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.png'; // Adjust the path according to the actual location
import './navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const handleLinkClick = (event, targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      event.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth <= 768) {
        setShowMenu(false); // Hide the menu after clicking on a link in mobile view
      }
    }
  };

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleMenuButtonClick = (event) => {
    event.stopPropagation();
    toggleMenu();
  };

  return (
    <nav>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
      </div>

      <button className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={handleMenuButtonClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div ref={menuRef} className={`nav-links ${showMenu ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#project-section" onClick={(event) => handleLinkClick(event, 'project-section')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about-section" onClick={(event) => handleLinkClick(event, 'about-section')}>
              About
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1V6-ZQRjT0GEzw2VA5pgYMWLQNLcUXovD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#contact-form-section" onClick={(event) => handleLinkClick(event, 'contact-form-section')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
