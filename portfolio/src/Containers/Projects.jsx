import React, { useState, useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";

import "../Styles/Components Styles/Projects.css";

function Projects() {
  const sectionRef = useRef(null);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

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

  return (
    <section id="Projects" className="projects-wrapper" ref={sectionRef}>
      {hasBeenSeen && (
        <div>
          <div className="projects-title-wrapper title">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(">cd Thomas_grant_projects <br>")
                  .pauseFor(700)
                  .typeString(">Loading Thomas_Grant_Projects...")
                  .pauseFor(300)
                  .callFunction(() => {
                    SetShowTitle(true); // Optional: control anything else
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 50,
                cursor: "",
              }}
            />
            <h1 className="title-projects">Projects</h1>
          </div>

          <div className="project-grid-wrapper">
            {/* Your project grid content */}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
