import React from 'react';

import './styles/main.css';

function Nav() {
  return (
    <nav className="navigation-wrapper work">
      <div className="logo"><a href="">jessica levtsenyuk</a></div>
      <ul className="navigation">
          <li id="work" className="nav-tab active"><a>work</a></li>
          <li id="about" className="nav-tab active"><a>about</a></li>
          <li id="contact" className="nav-tab active"><a>contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
