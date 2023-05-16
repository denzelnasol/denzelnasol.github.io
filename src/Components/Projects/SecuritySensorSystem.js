import React from "react";

// Images
import bbgSecurityCamImage1 from 'images/bbg-security-cam-1.jpg';
import bbgSecurityCamImage2 from 'images/bbg-security-cam-2.jpg';
import bbgSecurityCamImage3 from 'images/bbg-security-cam-3.png';

// Components
import { Galleria } from "primereact/galleria";

const SecuritySensorSystem = () => {

  const images = [
    {
      itemImageSrc: bbgSecurityCamImage1
    },
    {
      itemImageSrc: bbgSecurityCamImage2
    },
    {
      itemImageSrc: bbgSecurityCamImage3
    },
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
          Security Sensor System
        </div>

        <div className="project-description">
          Security Sensor System application created with the Beagle Bone Green,
          which detects movement and provides live stream recording and video uploading to clients
          viewing the online web server. Built with C, Javascript, NodeJS, and ExpressJS.
        </div>

        <div className="project-source-code">
          <a href="https://github.com/denzelnasol/security-sensor-system" target="_blank">
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

export default SecuritySensorSystem;