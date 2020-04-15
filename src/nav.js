import React from 'react';
import { Link } from 'react-router-dom';
import './styles/main.css';

function Nav() {
  return (
    <nav className="navigation-wrapper work">
      <div className="logo"><a href="">jessica levtsenyuk</a></div>
      <ul className="navigation">
          <Link id="work" className="nav-tab active" to="/">work</Link>
          <Link id="about" className="nav-tab active" to="/about">about</Link>
          <Link id="contact" className="nav-tab active" to="/contact">contact</Link>
      </ul>
    </nav>
  );
}

export default Nav;
