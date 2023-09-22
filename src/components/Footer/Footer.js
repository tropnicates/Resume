import React from "react";
import "./footer.css";

const Footer = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+918873232082";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:kun9577@gmail.com";
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-details" id="contact-form-section">
          <p className="contact-info" onClick={handleEmailClick}>
            Email: kun9577@gmail.com
          </p>
          <p className="contact-info" onClick={handlePhoneCall}>
            Contact: +91 8873232082
          </p>
          <p className="contact-info">Address: Nalanda, Bihar</p>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com/Tropnicates" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="https://www.instagram.com/tropnicates/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/kundan-kumar-3a8a6720b/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCeJRXg78vRKnplHU5lGh1QA" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          {/* Add other social media links/icons as needed */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kundan Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;