import React from "react";

// Components
import InvestingSimulator from "./InvestingSimulator";
import SecuritySensorSystem from "./SecuritySensorSystem";
import WebChess from "./WebChess";

// Styling
import './style.scss';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-title">
        Projects
      </div>

      <div className="project">
        <InvestingSimulator />
      </div>

      <div className="project">
        <WebChess />
      </div>

      <div className="project">
        <SecuritySensorSystem />
      </div>
    </div>
  );
}

export default Projects;