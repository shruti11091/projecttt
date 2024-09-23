import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">MyLogo</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li className="dropdown">
            <a href="#more">More</a>
            <ul className="dropdown-content">
              <li><a href="#about">About Us</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </li>
          <li><a className="cta" href="#signup">Get Started</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
