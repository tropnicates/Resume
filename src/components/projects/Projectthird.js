import React from "react";
import "./Project.css";
import projectImage from "../../assets/blog .png"; // Adjust the path according to the actual location

const Project = ({ name, description }) => {
  return (
    <div className="project" id="project-section">
      <h1>TranquilTales(Blog Website)</h1>
      <img id="image" src={projectImage} alt={name} />
      <p className="para">
      "Fullstack Blog: Explore diverse content, user-friendly experience. Features: authentication, posts, comments, responsive design, categories, profiles, sharing, search. Prioritize security, connect, and explore with us."
      <h3>Bcrypt NodeJS ExpressJS Cloudinary</h3>
      </p>
    </div>
  );
};

export default Project;
