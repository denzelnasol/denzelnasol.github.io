import React from "react";

// Images
import investingSimulatorImage from 'images/investing-simulator-1.png';

// Components
import { Image } from 'primereact/image';

const InvestingSimulator = () => {
  return (
    <div className="project">
      <a href="https://investingsimulator.info" target="_blank" className="left-project-image-container">
        <Image
          className="investing-simulator-image"
          src={investingSimulatorImage}
          alt="Image Text"
        />
      </a>

      <div className="project-text-container">
        <div className="project-title">
          Investing Simulator
        </div>

        <div className="project-description">
          Investing simulation application which allows the simulated trading of real stocks and
          the ability to enter trading competitions with friends. Built with Typescript, React, NodeJS, ExpressJS,
          PostgreSQL, and NGINX.
        </div>

        <div className="live-site">
          <a href="https://investingsimulator.info" target="_blank">
            In-progress
          </a>
        </div>

        <div className="project-source-code">
          <a href="https://github.com/denzelnasol/investment-simulator" target="_blank">
            Source Code
          </a>
        </div>
      </div>

    </div>
  );
}

export default InvestingSimulator;