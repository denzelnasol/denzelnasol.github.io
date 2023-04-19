import React from "react";

// Images
import profileImage from 'images/profile-image.png';

// Components
import { Image } from 'primereact/image';
import TechnologyIcon from 'Components/TechnologyIcon/TechnologyIcon';

// Styling
import './style.scss';

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <div className="about-title">
        About Me
      </div>
      
      <Image
        className="profile-image"
        src={profileImage}
        alt="Image Text"
      />

      <div className="about-me-description">
      As an aspiring software engineer, I have a passion for coding in Java, JavaScript, 
      and C. I'm currently studying full-stack web development as a 4th year student at SFU, 
      located in Surrey, BC, Canada. I enjoy tackling complex challenges and collaborating with 
      others to create innovative solutions. I'm excited to see what the future holds in this 
      rapidly-evolving field!
      </div>

      <div className="technologies">
        <TechnologyIcon name="Javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <TechnologyIcon name="Typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <TechnologyIcon name="C" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
        <TechnologyIcon name="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
      </div>

      <div className="technologies">
        <TechnologyIcon name="Linux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
        <TechnologyIcon name="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        <TechnologyIcon name="NodeJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        <TechnologyIcon name="ExpressJS" icon="devicon-express-original" />
        <TechnologyIcon name="PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
        <TechnologyIcon name="Nginx" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" />
      </div>


      <div className="technologies">
        <TechnologyIcon name="React" icon="devicon-react-original colored" />
        <TechnologyIcon name="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <TechnologyIcon name="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
      </div>

    </div>
  );
}

export default AboutMe;