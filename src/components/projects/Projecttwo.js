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
          "Join GlitzX Modeling to pursue your fashion dreams. Connect with
          models and professionals, develop stunning portfolios, receive runway
          training, and excel in the fashion industry. Become part of our
          vibrant community and embark on your fashion journey today!"
          <h5>React NodeJS ExpressJS Git CSS Module</h5>
        </p>
      </div>
    </div>
  );
};

export default Project;
