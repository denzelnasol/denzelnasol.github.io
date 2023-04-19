import React from "react";

// Images
import bbgSecurityCamImage from 'images/bbg-security-cam-1.jpg';

// Components
import { Image } from 'primereact/image';

const SecuritySensorSystem = () => {
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

      <a href="https://github.com/denzelnasol/security-sensor-system" target="_blank" className="right-project-image-container">
        <Image
          className="security-sensor-image"
          src={bbgSecurityCamImage}
          alt="Image Text"
        />
      </a>


    </div>
  );
}

export default SecuritySensorSystem;