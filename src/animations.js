import React from "react";

import jl_01 from './assets/animations/jl_01.MP4';
import jl_02 from './assets/animations/jl_02.MP4';
import jl_03 from './assets/animations/jl_03.MP4';
import jl_04 from './assets/animations/jl_04.MP4';

import "./styles/main.css";

function Animations() {
  return (
    <div>
      <div className="portfolio-row">
        <div className="portfolio-content image-content">
            <video loop autoPlay>
                <source src={jl_01} type="video/mp4"/>
            </video>
        </div>
        <div className="portfolio-content image-content">
            <video loop autoPlay>
                <source src={jl_02} type="video/mp4"/>
            </video>
        </div>
      </div>
      <div className="portfolio-row">
        <div className="portfolio-content image-content">
            <video loop autoPlay>
                <source src={jl_03} type="video/mp4"/>
            </video>
        </div>
        <div className="portfolio-content image-content">
            <video loop autoPlay>
                <source src={jl_04} type="video/mp4"/>
            </video>
        </div>
      </div>
    </div>
  );
}

export default Animations;
