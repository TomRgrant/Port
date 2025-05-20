import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "../Styles/Components Styles/TypeWriterTItle.css";
import "../Styles/Global.css";
import gitHubLogo from "../../Assets/ghlogo.png"
import linkedInLogo from "../../Assets/linkedlogo.png"

function TypeWriterTitle() {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <>
    <section className="intro-wrapper">
      <div className="initialise">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(">Initialising...<br>")
              .pauseFor(700)
              .typeString(">Loading Thomas_Grant_Portfolio...")
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

        {showTitle && (
          <div>
            <a target="blank" className="logo-anchors" href="https://github.com/TomRgrant"> <img className="title-logos" src={gitHubLogo} /> </a>
            <a target="blank" className="logo-anchors" href="https://www.linkedin.com/in/thomasgrant0/"> <img className="title-logos" src={linkedInLogo} /> </a>
        </div>
      )}
        
      </div>

      {showTitle && (
        <div className="title-wrapper">
          <h1>Thomas Grant</h1>
          <p className="title-description">
            <Typewriter
              options={{
                strings: ["Developer", "Programmer", "Code Wizard"],
                autoStart: true,
                loop: true,
                delay: 75,
                cursor: "|",
                deleteSpeed: 100,
                pauseFor: 300,
              }}
            />
          </p>
        </div>
      )}

        <p className="arrow-box">
          <span className="arrow-icon">⭣</span>
        </p>
      
    </section>
    </>
  );
}

export default TypeWriterTitle;
