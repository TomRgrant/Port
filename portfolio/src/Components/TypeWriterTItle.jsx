import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "../Styles/Components Styles/TypeWriterTItle.css";
import "../Styles/Global.css";

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
              .pauseFor(1000)
              .typeString(">Loading Thomas_Grant_Portfolio...")
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

      
    </section>
    <h1 className="test">Test</h1>
    </>
  );
}

export default TypeWriterTitle;
