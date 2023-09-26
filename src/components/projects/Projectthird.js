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
          "Discover our Fullstack Blog for diverse content and a user-friendly
          experience. Enjoy features like authentication, posts, comments,
          responsive design, categories, profiles, sharing, and search. Our
          commitment to security ensures a safe environment. Connect and explore
          with us today." 
          <h5>Bcrypt NodeJS ExpressJS Connect-mongo EJS Git CSS Multer Cloudinary Express-session</h5>
        </p>
      </div>
    </div>
  );
};

export default Project;
