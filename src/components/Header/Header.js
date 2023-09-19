// Header.js
import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/profileImg1.jpg";
import "./Header.css";

const Header = () => {
  const hireAction = () => {
    alert("Want to Hire Me? Contact Please!");
  };

  return (
    <div className="header-container">
      <div className="header-content">
        {/* Content of the header goes here */}
        <h1>Hey, what's up Guys!</h1>
        <h2>
          I'm a{" "}
          <Typical
            steps={[
              "Full Stack Developer",
              1000,
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p id="about-section" className="profile-pic">
          Myself Kundan Kumar, I belong to Nalanda, Bihar. I have done my
          schooling from Bihar. Currently, I am doing my bachelors in
          Electronics and Communication engineering from IIIT Kota, and I am
          looking for an internship as well as a full-time position in the domain of the
          software development field.
        </p>
        <div className="header-payment-container">
          <div className="payment-icons">
            <button className="btn" onClick={hireAction}>
              Hire Me
            </button>
            <a
              href="https://www.paypal.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-paypal"></i>
            </a>
            <a
              href="https://www.visa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-cc-visa"></i>
            </a>
            <a
              href="https://www.mastercard.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-cc-mastercard"></i>
            </a>
            <a
              href="https://www.americanexpress.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-cc-amex"></i>
            </a>
            <a href="https://www.upi.com/" target="_blank" rel="noopener noreferrer">
              <i className="payment payment_upi"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="profile-img-container">
        <img src={profileImg} alt="Profile" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
