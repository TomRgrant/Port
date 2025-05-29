import React from "react";
import "../Styles/Components Styles/ProjectCard.css";

function ProjectCard(project) {
    
  const techNodes = (project) => {
    return project.Tech.map((tech, index) => <div key={index}>{tech}</div>);
  };

  return (
    <>
      <div className="project-card-wrapper">
        <div className="project-card">
          <div className="project-img">
            <img src={project.Img} alt=""></img>
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
              <a className="project-button" href={project.Demo}>
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
