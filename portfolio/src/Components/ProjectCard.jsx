import React from "react";
import "../Styles/Components Styles/ProjectCard.css";

// Destructure `project` properly
function ProjectCard({ project }) {
  console.log(project);

  const techNodes = (project.Tech || []).map((tech, index) => (
    <li key={index}>{tech}</li>
  ));

  return (
    <div className="project-card-wrapper">
      <div className="project-card">
        <div className="project-img">
          <img src={project.Img} alt={project.Alt || project.Title} />
        </div>

        <div className="project-info">
          <h1 className="project-title">{project.Title}</h1>
          <h3 className="one-liner">{project.oneLiner}</h3>
          <ul className="tech-stack">{techNodes}</ul>
          <div className="project-expanded-info">
            <p className="project-description">{project.Description}</p>
            <a className="project-button" href={project.Github}>
              Github
            </a>
            {project.Demo && (
              <a className="project-button" href={project.Demo}>
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
