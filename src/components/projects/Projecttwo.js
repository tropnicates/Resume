import React from "react";
import "./ProjectTwo.css";
import projectImage from "../../assets/GlitzX.jpg"; // Adjust the path according to the actual location

const Projecttwo = ({ name, description }) => {
  return (
    <div className="project" id="project-section">
      <h1>GlitzX</h1>
      <img id="image" src={projectImage} alt={name} />
      <p className="para">
        GlitzX, an elegant modeling website, showcases the seamless blend of
        HTML, CSS, and JavaScript. Its modern design, accentuated by CSS,
        provides a stunning user experience. JavaScript powers interactive
        elements like model filtering and dynamic content loading, facilitating
        smooth navigation through diverse portfolios. GlitzX's responsive
        layout, thanks to HTML's capabilities, ensures flawless display on
        various screens. Aspiring models can easily connect with potential
        clients through a user-friendly contact form. This amalgamation of HTML,
        CSS, and JavaScript creates a glamorous platform for models to shine and
        industry enthusiasts to discover talent effortlessly.
      </p>
    </div>
  );
};

export default Projecttwo;
