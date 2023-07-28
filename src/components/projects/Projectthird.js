import React from "react";
import "./Project.css";
import projectImage from "../../assets/blog .png"; // Adjust the path according to the actual location

const Project = ({ name, description }) => {
  return (
    <div className="project" id="project-section">
      <h1>TranquilTales(Blog Website)</h1>
      <img id="image" src={projectImage} alt={name} />
      <p className="para">
        Welcome to Fullstack Blog, a dynamic platform for sharing thoughts and
        experiences on various topics. Our full-stack architecture ensures a
        seamless user experience. Features include user authentication, post
        creation, commenting system, responsive design, categories, tags, user
        profiles, social sharing, search functionality, and popular posts. We
        prioritize security and privacy, allowing users to engage in a vibrant
        community and enjoy a visually appealing experience across devices. Join
        us to connect, learn, and explore a world of diverse content.
      </p>
    </div>
  );
};

export default Project;
