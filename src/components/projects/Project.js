import React from "react";
import "./Project.css";
import projectsData from "./projects.json";

const Projects = () => {
  const imageMap = {
    "GlitzX (Modeling Website)": "/assets/GlitzX.jpg",
    "TranquilTales (Blog Website)": "/assets/blog%20.jpg",
    "MI STORE CLONE": "/assets/mistore.jpg",
  };

  return (
    <section className="projects-section reveal" id="project-section">
      <div className="section-heading">
        <p>Selected work</p>
        <h2>Things I've <em>made</em></h2>
      </div>
      <div className="projects-grid">
      {projectsData.projects.map((project, index) => (
        <article className="project" key={index}>
          <div className="project-image">
            <img src={imageMap[project.name]} alt={project.name} />
            <span>0{index + 1}</span>
          </div>
          <div className="project-copy">
            <div className="name">{project.name}</div>
            <p className="para">
            {project.description}
            </p>
            <div className="tech">{project.technologies}</div>
            <a className="prolink" href={project.link} target="_blank" rel="noopener noreferrer">
              View live <span>↗</span>
            </a>
          </div>
        </article>
      ))}
      </div>
    </section>
  );
};

export default Projects;
