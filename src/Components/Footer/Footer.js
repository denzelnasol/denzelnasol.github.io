import React from "react";
import { NavHashLink } from 'react-router-hash-link';

// Styling
import './style.scss'
import TechnologyIcon from "Components/TechnologyIcon/TechnologyIcon";

const Footer = () => {
  return (
    <div className="footer">

      <NavHashLink className="return-home" smooth to="#main">
        <div className="return-container">
          <i className="pi pi-angle-double-up" style={{ fontSize: '1.5rem' }}/>
        </div>
      </NavHashLink>

      <div className="icons">
        <a href="https://github.com/denzelnasol" target="_blank">
          <i className="devicon-github-original-wordmark icon" />
        </a>
        <a href="https://www.linkedin.com/in/denzelnasol/" target="_blank">
          <i className="devicon-linkedin-plain icon"></i>
        </a>
      </div>

      <div className="foot-mark">
        Denzel Nasol @2023
      </div>

    </div>
  );
}

export default Footer;