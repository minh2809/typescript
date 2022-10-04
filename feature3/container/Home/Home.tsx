import React from "react";
import NavBar from "components/NavBar/NavBar";
import Title from "components/Title/Title";
import Textfield from "components/Textfield/Textfield";

function Home() {
  return (
    <div>
      <NavBar />
      <Title>Home</Title>
      <Textfield>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar
        turpis quis mi pretium pellentesque. In luctus, leo sit amet egestas
        sagittis, ipsum mauris lobortis orci.
      </Textfield>
    </div>
  );
}

export default Home;
