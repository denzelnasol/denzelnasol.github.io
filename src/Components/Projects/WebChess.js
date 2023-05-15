import React from "react";

// Images
import webChessImage1 from 'images/web-chess-1.png';
import webChessImage2 from 'images/web-chess-2.png';

// Components
import { Galleria } from 'primereact/galleria';

const WebChess = () => {

  const images = [
    {
      itemImageSrc: webChessImage1
    },
    {
      itemImageSrc: webChessImage2
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2
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
    return <img src={item.itemImageSrc} style={{ width: '780px', height: '480px', display: 'block' }} />;
  }

  const thumbnailTemplate = (item) => {
    return <img src={item.itemImageSrc} style={{ width: '120px', height: '80px', display: 'block' }} />;
  }


  return (
    <div className="project">
      <div className="project-text-container">
        <div className="project-title">
          Web Chess
        </div>

        <div className="project-description">
          Fully functional chess application which allows two users to play a game of chess with
          communication through web sockets. Built with JavaScript, Express.js, Node.js, React,
          PostgreSQL and Socket.io.
        </div>

        <div className="project-source-code">
          <a href="https://github.com/denzelnasol/web-chess" target="_blank">
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

export default WebChess;