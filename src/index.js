import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
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
            <Switch>
                <Route component={WorkNav} path="/" />
                <Route component={About} exact path="/about" />
                <Route component={Contact} exact path="/contact" />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
