import React from "react";
import "./Project.css";
import projectImage from "../../assets/GlitzX.jpg";

const Project = ({ name, description }) => {
  return (
    <div className="project" id="project-section">
      <h2>GlitzX(Modelling Webiste)</h2>
      <img id="image" src={projectImage} alt={name} />
      <p className="para">
        "GlitzX Modeling: Empowering fashion dreams. Connect with models,
        industry pros, and enthusiasts. Create portfolios, train for the runway,
        and shine in the modeling world. Join our vibrant fashion community
        today!"
        <h3>React NodeJS ExpressJS Git CSS Module</h3>
      </p>
    </div>
  );
};

export default Project;
