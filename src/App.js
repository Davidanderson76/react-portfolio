import "./App.css";
import Nav from "../src/Components/Nav";
import About from "../src/Components/About";
import Portfolio from "./Components/Portfolio";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
