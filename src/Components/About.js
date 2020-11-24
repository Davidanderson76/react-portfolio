import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Components/About.css";
import David from "../img/david.JPG";
import { Link } from "react-router-dom";
import Resume from "../img/resume.pdf";

function About() {
  return (
    <div className="aboutMePage">
      <br></br>

      <h1 className="bigtext"> About Me </h1>

      <Card className="card" style={{ width: "25rem" }}>
        <Card.Img
          className="cardImage"
          src={David}
          style={{
            height: "300px",
            width: "250px",
            display: "block",
            marginright: "auto",
          }}
        />
        <Card.Body>
          <Card.Title> Get to know me! </Card.Title>
          <Card.Text>
            My name is David Anderson and I am living in the Minneapolis, MN
            area. In my free time I enjoy spending time with friends, writing
            music, and coding!
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="links">
            {" "}
            Cell: (320)-262-0320{" "}
          </ListGroup.Item>
          <ListGroup.Item className="links">
            <a
              className="nav-link"
              href="mailto:david.anderson1993@gmail.com"
            ></a>{" "}
            Email: david.anderson1993@gmail.com{" "}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link
            className="links"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/david-anderson-35701115b/",
                "_blank"
              )
            }
          >
            Linkedin
          </Link>

          <hr></hr>

          <Link className="links" onClick={() => window.open(Resume)}>
            <a href={Resume} rel="noreferrer" target="_blank">
              {" "}
              Resume{" "}
            </a>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
