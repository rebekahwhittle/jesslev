import React from "react";
// import logo from './logo.svg';
import "./styles/main.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

function Work() {
  console.log("HERE GIRLIE SQUIRRLEY");

  return (
    <div>
      <div className="portfolio-row">
        <div className="portfolio-content image-content">
          <Link id="digital" className="nav-tab-image" to="/work/digital">
            <img className="digital" src={process.env.PUBLIC_URL + "/worknav/1.png"} />
          </Link>
        </div>
        <div className="portfolio-content image-content">
         <Link id="digital" className="nav-tab-image" to="/work/paintings">
          <img className="paintings" src={process.env.PUBLIC_URL + "/worknav/2.png"} />
         </Link>
        </div>
      </div>
      <div className="portfolio-row">
        <div className="portfolio-content image-content">
          <Link id="digital" className="nav-tab-image" to="/work/animations">
            <img className="animations" src={process.env.PUBLIC_URL + "/worknav/3.png"} />
          </Link>
        </div>
        <div className="portfolio-content image-content">
          <Link id="digital" className="nav-tab-image" to="/work/ripe">
            <img className="ripe" src={process.env.PUBLIC_URL + "/worknav/4.png"} />
          </Link>
        </div>
      </div>
  </div>
  );
}

export default Work;
