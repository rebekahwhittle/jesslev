import React from "react";
import "./styles/main.css";
import jesslev from "./assets/jesslev.png";
import hlfcir from "./assets/svg/half-full-circle.svg";
import ylsquig from "./assets/svg/yellow-line-squiggle.svg";

function About() {
    return (
        <div class="container about">
            <div class="wrapper about">
                <main className="main-content">
                    <div className="svg-yellow-squiggle">
                        <img src={ylsquig} alt="" />
                    </div>
                    <div className="svg-half-full-circle">
                        <img src={hlfcir} alt="" />
                    </div>

                    <div className="content-container">
                        <div id="about-page" className="about-page content">
                            <div className="image-content">
                                <img src={jesslev} alt="" />
                            </div>
                            <div className="text-content">
                                <h2>A little about me...</h2>
                                <p>
                                    Jessica Levtsenyuk is an illustrator and
                                    graphic designer based in Austin, Texas. She
                                    finds inspiration through bright colors,
                                    music and personal life experiences. In her
                                    work, Jessica attempts to create a space for
                                    viewers to reflect on the human condition:
                                    growth, emotion, aspiration and conflict.
                                    While digital illustration and design is her
                                    forte, she often experiments with other
                                    media. She also enjoys drawing with graphite
                                    and ink, and painting with oils and
                                    acrylics.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default About;
