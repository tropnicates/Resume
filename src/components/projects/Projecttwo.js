import React from "react";
import "./ProjectTwo.css";
import projectImage from "../../assets/GlitzX.jpg"; // Adjust the path according to the actual location

const Projecttwo = ({ name, description }) => {
  return (
    <div className="project" id="project-section">
      <h1>GlitzX</h1>
      <img id="image" src={projectImage} alt={name} />
      <p className="para">
        I made this project using ReactJs with data availabe 
        open source in the market. I just assembled the data
        and given a different user interface. I just got to know 
        how it is working. and get a lot of knowledge throughout 
        the making this project. so yah it was a quite good experience
        throughout the journey. so I thank the people who made availabe
        the data open source.
      </p>
    </div>
  );
};

export default Projecttwo;
