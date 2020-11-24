import React from "react";

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
    </div>
  );
}

export default Home;
