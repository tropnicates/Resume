import React from "react";
import "./Project.css";
import projectImage from "../../assets/blog .png"; // Adjust the path according to the actual location

const Project = ({ name, description }) => {
  return (

    <div>
      
       <h4>TranquilTales(Blog Website)</h4>
   
    <div className="project" id="project-section">
     
      <img id="image" src={projectImage} alt={name} />
      <p className="para">
      "Fullstack Blog: Explore diverse content, user-friendly experience. Features: authentication, posts, comments, responsive design, categories, profiles, sharing, search. Prioritize security, connect, and explore with us."
      <h5>Bcrypt NodeJS ExpressJS Cloudinary</h5>
      </p>
    </div>
    </div>
  );
};

export default Project;