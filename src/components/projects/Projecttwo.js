import React from "react";
import "./Project.css";
import projectImage from "../../assets/GlitzX.jpg"; // Adjust the path according to the actual location

const Project = ({ name, description }) => {
  return (
    <div className="project" id="project-section">
      <h1>GlitzX(Modelling Webiste)</h1>
      <img id="image" src={projectImage} alt={name} />
      <p className="para">
        GlitzX Modeling is a dynamic platform celebrating fashion and modeling.
        It connects aspiring models, industry professionals, and fashion
        enthusiasts, offering a seamless experience with model portfolio
        creation, runway training, and talent scouting. The website's elegant
        interface and captivating content inspire individuals to pursue fashion
        dreams. It fosters a vibrant community of style and creativity,
        empowering individuals to shine in the glamorous world of modeling. Stay
        updated with the latest trends and showcase your talents on GlitzX
        Modeling.
      </p>
    </div>
  );
};

export default Project;
