import React from "react";
import Typewriter from "typewriter-effect";
import "../Styles/Components Styles/TypeWriterTItle.css"
import "../Styles/Global.css"

function TypeWriterTitle() {
  return (
    <>

    <section className="title-wrapper">

        <h1 className="title">Valves</h1>

        <Typewriter className="sub-heading"
            options={{
            strings: ["Ball", "Gate", "Butterfly"],
            autoStart: true,
            loop: true,
            deleteSpeed: 100,
            }}
        />
      </section>
    </>
  );
}

export default TypeWriterTitle;
