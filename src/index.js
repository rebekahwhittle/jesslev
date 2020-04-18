import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/main.css";
import WorkNav from "./work_nav";
import Nav from "./nav";
import About from "./about";
import Contact from "./contact";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />

      <Route component={WorkNav} exact path="/work" />
      <Route component={About} exact path="/about" />
      <Route component={Contact} exact path="/contact" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
