import React from 'react';
import './styles/main.css';

function Contact() {
  return (

      <main className="main-content">
        <div className="svg-yellow-squiggle">
          <img src="./assets/svg/yellow-line-squiggle.svg" alt="" />
        </div>
        <div className="svg-half-full-circle">
          <img src="./assets/svg/half-full-circle.svg" alt="" />
        </div>

        <div className="content-container">
            <div id="contact-page" className="contact-page content">
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

  );
}

export default Contact;