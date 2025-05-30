import React, { useState, useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";

import "../Styles/Components Styles/Projects.css";
import ProjectCard from "../Components/ProjectCard";
import projectList from "../Projects";

function Projects() {
  const sectionRef = useRef(null);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenSeen) {
          setHasBeenSeen(true);
          observer.unobserve(entry.target); // Only trigger once
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasBeenSeen]);


  const projectCardsNodes = projectList.map((project, index)=>{
    return <ProjectCard project={project} key={index}/>
  })



  return (
    <section id="Projects" className="projects-wrapper" ref={sectionRef}>
      {hasBeenSeen && (
        <div>
          <div className="projects-title-wrapper title">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(">cd Thomas_grant_projects <br>")
                  .pauseFor(400)
                  .typeString(">Loading Thomas_Grant_Projects...")
                  .pauseFor(100)
                  .callFunction(() => {
                    setShowProjects(true); 
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 25,
                cursor: "",
              }}
            />
            {showProjects && <h1 className="title-projects fade-in">Projects</h1>}
          </div>


          {showProjects && (
          <div className="project-grid-wrapper">
            {projectCardsNodes}
          </div>


          )}
        </div>
      )}
    </section>
  );
}

export default Projects;
