import React from "react";
import "../Styles/Components Styles/ProjectCard.css";

import mountain from "../../Assets/mountain.jpg"

// Destructure `project` properly
function ProjectCard({ project }) {
  console.log(project);

  const techNodes = (project.Tech || []).map((tech, index) => (
    <li className="tech-node" key={index}>{tech}</li>
  ));

  function toggleShowMoreInfo(id) {
    const element = document.getElementById(id)
    element.classList.toggle('invis')
  }

  return (
    <div className="project-card-wrapper">
      <div className="project-card">
        <div className="project-img">
          <img src={mountain} alt={project.Alt || project.Title} />
        </div>

        <div className="project-info">
          <h1 className="project-title">{project.Title}</h1>
          <h3 className="one-liner">{project.oneLiner}</h3>
          <ul className="tech-stack">{techNodes}</ul>
          <p onClick={() => toggleShowMoreInfo(project.Title)}>^</p>
          <div id={project.Title} className="project-expanded-info invis">
            <p className="project-description">{project.Description}</p>
            <a target="blank" className="project-button" href={project.Github}>
              Github
            </a>
            {project.Demo && (
              <a target="blank" className="project-button" href={project.Demo}>
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
