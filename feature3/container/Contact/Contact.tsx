import React from "react";
import NavBar from "components/NavBar/NavBar";
import Title from "components/Title/Title";
import Textfield from "components/Textfield/Textfield";

function Contact() {
  return (
    <div>
      <NavBar />
      <Title>Contact</Title>
      <Textfield>
        Oyid eleifend turpis elit sed est. Donec facilisis justo elit, in
        consectetur nulla pretium vitae.
      </Textfield>
    </div>
  );
}

export default Contact;
