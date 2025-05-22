import React, { useState } from "react";
import Typewriter from "typewriter-effect";


import "../Styles/Components Styles/Projects.css"

function Projects() {

  const [showTitle,  SetShowTitle] = useState(false)

    const projects = [
        {Title:"", Description:"", Img:"", Tech:[], GitHub:"", Demo:""}
    ]


//     .example-style {
//   animation: fade-in 3s;
// }

// @keyframes fade-in {
//   from {
//     opacity: 0;     maybe change this to display none and block wiht quick transition?
//   }
//   to {
//     opacity: 100;
//   }
// }


    return(

        <>
            <section className="projects-wrapper">

            <div className="projects-title-wrapper title">

                <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(">cd Thomas_grant_projects <br>")
              .pauseFor(700)
              .typeString(">Loading Thomas_Grant_Projects...")
              .pauseFor(300)
              .callFunction(() => {
                setShowTitle(true); // Only after this, show the title
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



            </div>

            </section>
        </>
    )
}

export default Projects