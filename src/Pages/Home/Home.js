import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Media from "react-bootstrap/Media";

import David from "../../img/david.JPG";

import "./Home.css";

function Home() {
  const styleImg = {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"  
  };

  const flexStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <div className='homeBody'>
      <Container>
        <Row>
          <Col sm={12}>
            <Media>
              <br></br>
              <img
                width={180}
                height={250}
                className="mr-3"
                src={David}
                alt=" David Anderson "
                style={styleImg}
              />

              <Media.Body>
                <h3 className="davidHeader"> David Anderson </h3>

                <hr></hr>
                <Col sm={12}>
                  <p style={flexStyle}>
                    Full stack web developer with 5+ years of team
                    management experience. Certificate in full stack web
                    development from University of Minnesota.
                    <br></br>
                    
                  </p>
                </Col>
              </Media.Body>
            </Media>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <p style={flexStyle}>
              I have created this page to present my web development projects,
              musical productions, and other various artistic endeavors.
              <br></br>
              <br></br>
              Currently looking for development related work and projects
              to collaborate on.
              <br></br>
              <br></br>
            </p>
            <hr></hr>
          </Col>

          <br></br>
          <br></br>
        </Row>

        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>

        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
