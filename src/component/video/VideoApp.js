import React from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

const VideoApp = ({src , poster}) => {
  const [url  , setSrc] = React.useState()
  React.useEffect(()=>{
    setSrc(src);
  },[src])
    return (
      <>
     <Player  poster={poster}>
      <source src={url}/>
    </Player>
      </>
    );
  };

export default VideoApp;