import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.png'; 
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
        setShowMenu(false);
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

      <div className='menu-toggle' onClick={handleMenuButtonClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>

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
              href="https://drive.google.com/file/d/1E-sWyFsiY8E6-1KUOtHJnoxDdgIQ__-u/view?usp=drive_link"
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
