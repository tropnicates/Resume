import React from "react";
import "./Project.css";
import projectImage from "../../assets/mistore.jpg"; // Adjust the path according to the actual location

const Project = ({ name, description }) => {
  return (
    <div className="project" id="project-section">
      <h1>MI STORE CLONE</h1>
      <img id="image" src={projectImage} alt={name} />
      <p className="para">
        I made this project using ReactJs with data availabe 
        open source in the market. I just assembled the data
        and given a different user interface. I just got to know 
        how it is working. and get a lot of knowledge throughout 
        the making this project. so yah it was a quite good experience
        throughout the journey. so I thank the people who made availabe
        the data open source.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nobis esse amet numquam nesciunt cupiditate minus optio ex natus incidunt accusantium voluptate atque vel dignissimos harum magnam autem, officia quos, eligendi enim suscipit est a odit. Ea maiores dolore tempore, velit ad iusto quod sint pariatur, sunt, earum accusamus alias?
      </p>
    </div>
  );
};

export default Project;
