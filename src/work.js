import React from "react";
// import logo from './logo.svg';
import "./styles/main.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

function Work() {
  console.log("HERE GIRLIE SQUIRRLEY");

  return (
    <div className="container work">
      <div className="wrapper work">
        <main className="main-content">

          <div className="content-container">
            <div id="work-page" className="work-page content visible">
              HELLO WORLD
              <Link id="digital" className="nav-tab active" to="/work/digital">Digital</Link>
              <Link id="digital" className="nav-tab active" to="/work/paintings">Paintings</Link>
              <Link id="digital" className="nav-tab active" to="/work/animations">Animations</Link>
              <Link id="digital" className="nav-tab active" to="/work/ripe">Ripe</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Work;
