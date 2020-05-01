import React from "react";
import "./styles/main.css";
import cheetah from "./assets/cheetah-wallpaper.png";
import hlfcir from "./assets/svg/half-full-circle.svg";
import ylsquig from "./assets/svg/yellow-line-squiggle.svg";

function Contact() {
    return (
        <div class="container contact">
            <div class="wrapper contact">
                <main className="main-content">
                    <div className="svg-yellow-squiggle">
                        <img src={ylsquig} alt="" />
                    </div>
                    <div className="svg-half-full-circle">
                        <img src={hlfcir} alt="" />
                    </div>
                    <div className="content-container">
                        <div id="contact-page" className="contact-page content">
                            <div className="image-content">
                                <img src={cheetah} alt="" />
                            </div>
                            <div className="text-content">
                                <div className="contact-label">
                                    <p>Email</p>
                                    <p>Instagram</p>
                                    <p>LinkedIn</p>
                                </div>
                                <div class="contact-info">
                                    <p><a href="mailto:jessicadlev@gmail.com">jessicadlev@gmail.com</a></p>
                                    <p><a target="_blank" href="https://www.instagram.com/mechanicalbully/">@mechanicalbully</a></p>
                                    <p><a target="_blank" href="https://www.linkedin.com/in/jessica-levtsenyuk-728156112/">Jessica Levtsenyuk</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Contact;
