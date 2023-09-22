import React from "react";
import "./Project.css";
import projectImage from "../../assets/GlitzX.jpg";

const Project = ({ name, description }) => {
  return (
    <div className="h2">
      <h4>GlitzX(Modelling Webiste)</h4>
      <div className="project" id="project-section">
        <img id="image" src={projectImage} alt={name} />
        <p className="para">
          "GlitzX Modeling: Unleash your fashion aspirations. Connect with
          models and pros, build portfolios, train for the runway, and thrive in
          the fashion world. Join our vibrant community today!"
          <h5>React NodeJS ExpressJS Git CSS Module</h5>
        </p>
      </div>
    </div>
  );
};

export default Project;
