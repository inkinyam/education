import "./Video.scss"
import React from 'react';
import { Player, BigPlayButton } from 'video-react';

import Poster from '../../images/videoPoster.jpg';


const Video = () => {
  return (
    <section className="video">
      <Player
        playsInline
        poster      = {Poster}
        src         = 'https://www.youtube.com/embed/TH0oCDziVQQ'
        fluid       = {true}
        muted       = {true}
        aspectRatio = "auto"
        autoPlay    = {false} 
        preload     = "metadata"
        loop        = {false}>
        
        <BigPlayButton position={'center'}/>
      
      
      </Player>
    </section>
     
  )
}

export default Video;

