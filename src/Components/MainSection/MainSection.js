import { NavHashLink } from 'react-router-hash-link';

// Styling
import './style.scss';

const MainSection = () => {
  return (
    <div className="main-section" id="main">
      Hi, I'm <span className="name-text">Denzel</span>. <br />
      I'm an aspiring software engineer. <br />

      <NavHashLink className="view-work-button" smooth to="#about">
          View my work
          <span className="down-arrow">
            <i className="pi pi-arrow-down" />
          </span>
      </NavHashLink>
    </div>
  );
}

export default MainSection;