import React from 'react'; 
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import '../Components/Portfolio.css';


function Portfolio() {
  return (
    
    <div className='portfolio-image'>

      <br></br>
      <h1 className='bigtext'> Portfolio </h1>
      <br></br>

      <CardDeck>

          <Card>
            <Card.Img onClick={()=> window.open("https://ultimate-note-taker.herokuapp.com/", "_blank")} className="cardOne" />
              <Card.Body className="cardText">
                <Card.Title> Note Taker </Card.Title>
                <Card.Text >
                Here we have one of the best note taking applications on this side of the Mississippi. 
                This note taking app will allow you to store your notes even after closing out of the browser.
                </Card.Text>
              </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img onClick={()=> window.open("https://budget-app-free-now.herokuapp.com/", "_blank")} className="cardTwo" />
              <Card.Body className="cardText">
                <Card.Title> Budget App </Card.Title>
                <Card.Text>
                Add expenses or deposits to your budget with or without a connection! 💵 💵 💵
                </Card.Text>
              </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <hr></hr>

          <Card>
            <Card.Img onClick={()=> window.open("https://employee-directory-76.herokuapp.com/", "_blank")} className="cardThree" />
              <Card.Body className="cardText">
                <Card.Title> Employee Directory </Card.Title>
                <Card.Text>
                Here is a standard company directory. 
                This application was built with React and uses an API call to get random employees 
                to display on the table. The functionality is smooth and allows the user to search 
                by name for employees within the company.
                </Card.Text>
              </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img onClick={()=> window.open("https://ultimatefitnesstracker.herokuapp.com/", "_blank")} className="cardFour" />
              <Card.Body className="cardText">
                <Card.Title> Fitness Tracker </Card.Title>
                <Card.Text>
                Time to workout and get healthy while logging your process with this application! 🏋️
                </Card.Text>
              </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img onClick={()=> window.open("https://polar-escarpment-17006.herokuapp.com/", "_blank")} className="cardFive" />
              <Card.Body className="cardText">
                <Card.Title> PokeMemory </Card.Title>
                <Card.Text>
                Match your favorite Pokemon characters in this exciting memory game.
                </Card.Text>
              </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
    </div>
  );
}


export default Portfolio;
