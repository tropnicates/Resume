import React from "react";
import "./Project.css";
import projectsData from "./projects.json";

const Projects = () => {
  return (
    <div>
      <div className="things">Things I have made!</div>
      {projectsData.projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="name">{project.name}</div>
          <div className="contentDetails"><img id="image" src={project.image} alt={project.name} />
          <p className="para">
            {project.description}
            <div className="tech">{project.technologies}</div>
          </p></div>
          <a className="prolink" href={project.link} target="_blank" rel="noopener noreferrer">
              Live View
            </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
