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

        <div className="profile-img-container hate">
        <img src={profileImg} alt="Profile" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
      
        <p id="about-section" className="profile-pic hide">
          Myself Kundan Kumar, I belong to New Delhi, India. I have done my
          schooling from Bihar. Currently, I am doing my bachelors in
          Electronics and Communication engineering from IIIT Kota, and I am
          looking for an internship as well as a full-time position in the domain of the
          software development field.
        </p>
        <div className="header-payment-container hide">
          <div className="payment-icons">
            <button className="btn" onClick={hireAction}>
              Hire Me
            </button>
          </div>
        </div>
      </div>
      <div className="profile-img-container love">
        <img src={profileImg} alt="Profile" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
      
    </div>
  );
};

export default Header;