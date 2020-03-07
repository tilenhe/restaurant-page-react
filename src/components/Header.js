import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Menu from "./Menu";

export default function Header() {
  return (
    <div>
      {" "}
      <Router>
        <h1>Korean Restaurant</h1>
        <p>Welcome to the best Korean restaurant in the world</p>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </ul>

        <div className="App">
          <Route exact path="/">
            <Home />{" "}
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </div>
      </Router>
    </div>
  );
}
