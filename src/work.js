import React from 'react';
// import logo from './logo.svg';
import './styles/main.css';

function Work() {
  return (
    <div className="container work">
    <div className="wrapper work">
      <main className="main-content">
        <div className="svg-yellow-squiggle">
          <img src="./assets/svg/yellow-line-squiggle.svg" alt="" />
        </div>
        <div className="svg-half-full-circle">
          <img src="./assets/svg/half-full-circle.svg" alt="" />
        </div>

        <div className="content-container">
          {/* <!-- ABOUT PAGE --> */}
          <div id="about-page" className="about-page content hidden">
            <div className="image-content">
              <img src="./assets/jesslev.png" alt="" />
            </div>
            <div className="text-content">
              <h2>A little about me...</h2>
              <p>
                Jessica Levtsenyuk is an illustrator and graphic designer based in Austin, Texas. She finds inspiration through bright colors, music and personal life experiences. 
                In her work, Jessica attempts to create a space for viewers to reflect on the human condition: growth, emotion, aspiration and conflict. 

                While digital illustration and design is her forte, she often experiments with other media. She also enjoys drawing with graphite and ink, and painting with oils and acrylics.
              </p>
            </div>
          </div>
          {/* <!-- WORK PAGE --> */}
          <div id="work-page" className="work-page content visible">
            WORK PAGE
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/autumn-girl.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/japanese-circle.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/lobster.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/mechanical-bully.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/multi-girls.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/shrimp-cocktail.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/texan.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/women-print.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_01.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_02png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_03.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_04.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_05.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_06.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_07.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_08.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_09.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_10.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_11.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_12.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_13.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_14.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_15.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_16.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_17.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_18.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_19.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_20.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_21.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_22.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_23.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_24.png" alt="" />
              </div>
            </div>
            <div className="portfolio-row">
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_25.png" alt="" />
              </div>
              <div className="portfolio-content image-content">
                <img src="./assets/portfolio/jl_26.png" alt="" />
              </div>
            </div>
          </div>
          {/* <!-- CONTACT PAGE --> */}
          <div id="contact-page" className="contact-page content hidden">
            <div className="image-content">
              <img src="./assets/cheetah-wallpaper.png" alt="" />
            </div>
            <div className="text-content">
              <div className="contact-label">
                <p>Email</p>
                <p>Phone</p>
                <p>Instagram</p>
              </div>
              <div class="contact-info">
                <p>jessicalev@gmail.com</p>
                <p>402-567-8901</p>
                <p>@mechanicalbully</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
}

export default Work;
