import React from "react";
import Spinner from 'react-bootstrap/Spinner'

const headerStyle = {
  fontsize: "50px",
};

function Home() {
  return (
    <div className="hero-image">
      <br></br>
      <h1 style={headerStyle} className="hero-text">
        {" "}
        David William Anderson{" "}
      </h1>
      <h4 className="hero-text"> Full Stack Developer </h4>
      <br></br>
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </div>
  );
}

export default Home;
