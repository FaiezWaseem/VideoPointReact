import React, { Component } from 'react';
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

const VideoApp = ({src , poster}) => {
    const videoSrc = {
        type: "video",
        sources: [
          {
            src: src,
            poster : poster
          }
          
        ]
      };
    return (
      <>
        <Plyr source={videoSrc} />
      </>
    );
  };

export default VideoApp;