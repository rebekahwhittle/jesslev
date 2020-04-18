import React from "react";
// import logo from './logo.svg';
import "./styles/main.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Digital from "./digital";

function Work() {
  return (
    <div className="container work">
      <div className="wrapper work">
        <main className="main-content">

          <div className="content-container">
            <div id="work-page" className="work-page content visible">
              <Router>
                <Link id="digital" className="nav-tab active" to="/digital">Digital</Link>
                <Link id="paintings" className="nav-tab active" to="/paintings">Paintings</Link>

                <Route component={Digital} exact path="/digital" />

              </Router>
            </div>
          </div>
        </main>
      </div>
    </div>

  );
}

export default Work;
