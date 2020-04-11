import React from 'react';

import './App.css';

function Nav() {
  return (
      <div classNameName="work">
        <div classNameName="wrapper work">
            <nav className="navigation-wrapper work">
                <div className="logo"><a href="">jessica levtsenyuk</a></div>
                <ul className="navigation">
                    <a href="pages/digital.html">DIGITAL</a>

                    <li id="work" classNameName="nav-tab active"><a>work</a></li>
                    <li id="about" className="nav-tab active"><a>about</a></li>
                    <li id="contact" classNameName="nav-tab active"><a>contact</a></li>
                </ul>
            </nav>
        </div> 
      </div>

  );
}

export default Nav;
