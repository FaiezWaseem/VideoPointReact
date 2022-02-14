import React, { Component } from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css

const VideoApp = ({src , poster}) => {
    return (
      <>
     <Player  poster={poster}>
      <source src={src}/>
    </Player>
      </>
    );
  };

export default VideoApp;