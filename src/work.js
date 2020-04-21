import React from "react";
// import logo from './logo.svg';
import "./styles/main.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

function Work() {
    console.log("HERE GIRLIE SQUIRRLEY");

    return (
        <div>
            <div className="portfolio-row">
                <div className="portfolio-content image-content worknav-tab">
                    <Link
                        id="digital"
                        className="nav-tab-image"
                        to="/work/digital"
                    >
                        <img
                            className="digital"
                            src={
                                process.env.PUBLIC_URL +
                                "/portfolio/lobster.png"
                            }
                        />
                        <div className="nav-tab-text digital">Digital</div>
                    </Link>
                </div>
                <div className="portfolio-content image-content worknav-tab">
                    <Link
                        id="digital"
                        className="nav-tab-image"
                        to="/work/paintings"
                    >
                        <img
                            className="paintings"
                            src={
                                process.env.PUBLIC_URL + "/paintings/jl_05.png"
                            }
                        />
                        <div className="nav-tab-text paintings">Paintings</div>
                    </Link>
                </div>
            </div>
            <div className="portfolio-row">
                <div className="portfolio-content image-content worknav-tab">
                    <Link
                        id="digital"
                        className="nav-tab-image"
                        to="/work/animations"
                    >
                        <img
                            className="animations"
                            src={
                                process.env.PUBLIC_URL +
                                "/portfolio/animation.png"
                            }
                        />
                        <div className="nav-tab-text animations">
                            Animations
                        </div>
                    </Link>
                </div>
                <div className="portfolio-content image-content worknav-tab">
                    <Link
                        id="digital"
                        className="nav-tab-image"
                        to="/work/ripe"
                    >
                        <img
                            className="ripe"
                            src={process.env.PUBLIC_URL + "/ripe/IMG_0373.png"}
                        />
                        <div className="nav-tab-text ripe">Ripe</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Work;
