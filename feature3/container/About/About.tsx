import React from "react";
import NavBar from "components/NavBar/NavBar";
import Title from "components/Title/Title";
import Textfield from "components/Textfield/Textfield";

function About() {
  return (
    <div>
      <NavBar />
      <Title>About</Title>
      <Textfield>
        Id consectetur urna misao eu justo. In hac habitasse platea dictumst.
        Maecenas non convallis nunc. Cras maximus, nulla in feugiat condimentum,
        neque metus varius arcu.
      </Textfield>
    </div>
  );
}

export default About;
