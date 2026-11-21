import React, { useEffect, useState } from "react";
import profileImg from "../../assets/profileImg1.jpg";
import "./Header.css";

const Header = () => {
  const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [roles.length]);

  return (
    <header className="header-container" id="home">
      <div className="hero-glow"></div>
      <div className="header-content">
        <div className="availability"><span></span> Available for opportunities</div>
        <p className="hero-kicker">Hello, I'm Kundan Kumar</p>
        <h1>Building digital products that <em>feel different.</em></h1>
        <h2>
          {" "}
          <b key={roleIndex}>{roles[roleIndex]}</b>
        </h2>

        <p id="about-section" className="profile-pic">
          Myself Kundan Kumar, I belong to New Delhi, India. I have done my
          schooling from Bihar and completed my bachelors in
          Electronics and Communication engineering from IIIT Kota in 2024, and I am
          looking for an internship as well as a full-time position in the domain of the
          software development field.
        </p>
        <div className="header-actions">
          <a className="btn btn-primary" href="#project-section">Explore my work <span>↓</span></a>
          <a className="btn btn-secondary" href="mailto:kun9577@gmail.com">Let's talk</a>
        </div>
      </div>
      <div className="profile-img-container">
        <div className="portrait-ring"></div>
        <img src={profileImg} alt="Kundan Kumar" />
        <div className="floating-chip chip-one">React</div>
        <div className="floating-chip chip-two">Node.js</div>
      </div>
    </header>
  );
};

export default Header;