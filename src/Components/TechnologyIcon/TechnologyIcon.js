import React from "react";

// Styling
import './style.scss';

const TechnologyIcon = ({ ...props }) => {

  const { src, icon, name } = props;

  let iconSource;
  if (src) {
    iconSource = src;
  }

  if (icon) {
    iconSource = icon;
  }

  return (
    <div className="technology-icon">
      <div className="border">
        {src
          ? <img
            className="icon"
            src={iconSource}
          />
          : <i className={`${iconSource} icon`}></i>
        }
        <div className="technology-text">
          {name}
        </div>
      </div>
    </div>
  );
}

export default TechnologyIcon;