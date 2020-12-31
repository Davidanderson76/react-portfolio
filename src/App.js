import "./App.css";
import Nav from "./Components/Nav/Nav";
import About from "../src/Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import darkTheme from "./Theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
