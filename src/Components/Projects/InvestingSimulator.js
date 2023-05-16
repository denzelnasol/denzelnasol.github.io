import React from "react";

// Images
import investingSimulatorImage1 from 'images/investing-simulator-1.png';
import investingSimulatorImage2 from 'images/investing-simulator-2.png';
import investingSimulatorImage3 from 'images/investing-simulator-3.png';
import investingSimulatorImage4 from 'images/investing-simulator-4.png';
import investingSimulatorImage5 from 'images/investing-simulator-5.png';

// Components
import { Image } from 'primereact/image';
import { Galleria } from "primereact/galleria";

const InvestingSimulator = () => {

  const images = [
    { itemImageSrc: investingSimulatorImage1 },
    { itemImageSrc: investingSimulatorImage2 },
    { itemImageSrc: investingSimulatorImage3 },
    { itemImageSrc: investingSimulatorImage4 },
    { itemImageSrc: investingSimulatorImage5 },
  ];

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} style={{ width: '100%', display: 'block' }} />;
  }

  const thumbnailTemplate = (item) => {
    return <img src={item.itemImageSrc} style={{ width: '120px', height: '80px', display: 'block' }} />;
  }
  return (
    <div className="project">
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
            Live Site
          </a>
        </div>

        <div className="project-source-code">
          <a href="https://github.com/denzelnasol/investing-simulator" target="_blank">
            Source Code
          </a>
        </div>
      </div>

      <div className="right-project-image-container">
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={3}
          circular
          style={{ maxWidth: '640px' }}

          showItemNavigators
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
        />
      </div>

    </div>
  );
}

export default InvestingSimulator;