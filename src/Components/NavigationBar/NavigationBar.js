import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

// Styling
import './style.scss';

const NavigationBar = ({ ...props }) => {
  return (
    <nav ref={props.navbarRef} className={`navigation-bar ${props.isScrolled ? "nav-bar-scrolled" : ""}`} id="nav-bar">
      <ul className="navigation">

        <li
          onClick={() => props.updateLink('#nav-main')}
          className="navigation-item"
          id="nav-main">
          <NavHashLink smooth to="#main">Home</NavHashLink>
        </li>

        <li
          onClick={() => props.updateLink('#nav-about')}
          className="navigation-item"
          id="nav-about">
          <NavHashLink smooth to="#about">About</NavHashLink>
        </li>

        <li
          onClick={() => props.updateLink('#nav-projects')}
          className="navigation-item"
          id="nav-projects">
          <NavHashLink smooth to="#projects">Projects</NavHashLink>
        </li>

        <li
          onClick={() => props.updateLink('#nav-contact')}
          className="navigation-item"
          id="nav-contact">
          <NavHashLink smooth to="#contact">Contact</NavHashLink>
        </li>

      </ul>
    </nav>
  );
}

export default NavigationBar;