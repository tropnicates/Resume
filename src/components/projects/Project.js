import React from "react";
import "./Project.css";
import projectImage from "../../assets/mistore.jpg";

const Project = ({ name, description }) => {
  return (
    
    <div className="project" id="project-section">
      <h1>Things I have made!</h1>
      <h2>MI STORE CLONE</h2>
      <img id="image" src={projectImage} alt={name} />
      <p className="para">
        Created user-friendly e-commerce site with streamlined product search,
        attractive cart, profile tools, and product ratings for enhanced user
        satisfaction, engagement, and feedback, promoting effective product
        discovery and exploration.
        <h3>
        NodeJS, ExpressJS, MongoDB, React, JWT
      </h3>
      </p>
      
      </div>
  );
};

export default Project;
