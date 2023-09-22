import React from "react";
import "./Project.css";
import projectImage from "../../assets/mistore.jpg";
const Project = ({ name, description }) => {
  return (
    <div className="h1">
      <h3>Things I have made!</h3>
      <div className="h2">
        <h4>MI STORE CLONE</h4>
        <div className="project">
          <img id="image" src={projectImage} alt={name} />
          <div className="para">
            <p>
              Built an engaging e-commerce platform featuring efficient product
              search, appealing cart, profile tools, and product ratings for
              improved user experience, satisfaction, and effective product
              discovery.
              <h5>NodeJS, ExpressJS, MongoDB, React, JWT</h5>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
