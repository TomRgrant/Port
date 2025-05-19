import React from "react";
import Typewriter from "typewriter-effect";
import "../Styles/Components Styles/TypeWriterTItle.css"
import "../Styles/Global.css"

function TypeWriterTitle() {
  return (
    <>

    <section className="title-wrapper">

      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(">Intilising...<br>")
            .pauseFor(1000)
            .typeString(">Loading Thomas_Grant_Portfolio...")
            .start(); // just type and stop
        }}
        options={{
          autoStart: true,
          loop: false,
          delay: 50, // typing speed
          cursor: "" // optional
        }}
      />

        
    </section>
    </>
  );
}

export default TypeWriterTitle;
