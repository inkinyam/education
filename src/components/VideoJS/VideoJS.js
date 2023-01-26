import './VideoJS.scss';
import React from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';

import withCursor from "../../HOCs/withCursor";

const VideoJS = ({options, ...props}) => {
  const { onCursor } = props.context;

  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);


  React.useEffect(()=> {
    const player = playerRef.current;

    if (!player) {
      const videoELement = videoRef.current;
      if (!videoELement)  return;

      playerRef.current = videojs(videoELement, options)
    }

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    }

  }, [options, videoRef, playerRef])

  return ( 
    <div data-vjs-player 
         onMouseEnter = {() => onCursor('play')} 
         onMouseLeave = {onCursor}>
      <video ref={videoRef} className={`video-js vjs-default-skin`}></video>      
      
    </div>
  )
}

export default withCursor(VideoJS);
