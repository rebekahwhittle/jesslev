import React from "react";
// import logo from './logo.svg';
import "./styles/main.css";

function Paintings() {
    return (
        <div>
            <div className="portfolio-row">
                <div className="portfolio-content image-content">
                    <img
                        src={process.env.PUBLIC_URL + "/paintings/jl_01.png"}
                    />
                </div>
                <div className="portfolio-content image-content">
                    <img
                        src={process.env.PUBLIC_URL + "/paintings/jl_04.png"}
                    />
                </div>
            </div>
            <div className="portfolio-row">
                <div className="portfolio-content image-content">
                    <img
                        src={process.env.PUBLIC_URL + "/paintings/jl_03.png"}
                    />
                </div>
                <div className="portfolio-content image-content">
                    <img
                        src={process.env.PUBLIC_URL + "/paintings/jl_05.png"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Paintings;
