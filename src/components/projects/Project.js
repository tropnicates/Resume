import React from "react";
import "./Project.css";
import projectImage from "../../assets/mistore.jpg"; // Adjust the path according to the actual location

const Project = ({ name, description }) => {
  return (
    <div className="project" id="project-section">
      <h1>MI STORE CLONE</h1>
      <img id="image" src={projectImage} alt={name} />
      <p className="para">
        Mi Store Clone is an open-source ReactJS web app replicating Mi Store's
        functionality. It utilizes a JSON file to store product data, ensuring
        easy modification. Users enjoy a sleek UI, smooth navigation, and can
        browse a wide range of products, view descriptions, and add items to
        their cart. The app showcases React's power in creating dynamic
        e-commerce platforms with user authentication and secure checkout. A
        testament to React's potential for immersive and feature-rich online
        shopping experiences through open-source contributions.
      </p>
    </div>
  );
};

export default Project;
