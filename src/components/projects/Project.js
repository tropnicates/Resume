import React, { useState } from "react";
import "./Project.css";
import projectImage from "../../assets/mistore.jpg";

const Project = ({ name, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="h1">
      <h3>Things I have made!</h3>
      <div className="h2">
        <h4>MI STORE CLONE</h4>
        <div className={`project ${expanded ? "expanded" : ""}`}>
          <img
            id="image"
            src={projectImage}
            alt={name}
            onClick={toggleExpansion}
          />
          <div className="para">
            <p>
              Created an engaging e-commerce platform with streamlined product
              search, an attractive shopping cart, profile customization tools,
              and product ratings. These enhancements enhance user experience,
              satisfaction, and effective product discovery, providing a
              seamless and enjoyable online shopping experience.
              <h5>
                React, NodeJS, ExpressJS, MongoDB, Material UI, Rest API, Git,
                CSS Module, JWT.
              </h5>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
