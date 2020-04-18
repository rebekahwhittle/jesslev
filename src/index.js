import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/main.css";
import Work from "./work";
import Nav from "./nav";
import About from "./about";
import Contact from "./contact";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />

      <Route component={Work} exact path="/" />
      <Route component={About} exact path="/about" />
      <Route component={Contact} exact path="/contact" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
