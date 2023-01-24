import "./Video.scss"
import React from 'react';
import { Player, BigPlayButton } from 'video-react';

import Poster from '../../images/videoPoster.jpg';
import withCursor from "../../HOCs/withCursor";
import Title from "../Title/Title";

const Video = ({...props}) => {
  const { onCursor } = props.context;
  return (
    <section className="video" >
      <Title title ="о программе"/>
      <div className="video__video" 
              onMouseEnter = {() => onCursor('play')} 
              onMouseLeave = {onCursor}>
        <Player
          playsInline
          poster      = {Poster}
          src         = 'https://www.youtube.com/embed/TH0oCDziVQQ'
          fluid       = {true}
          muted       = {true}
          aspectRatio = "auto"
          autoPlay    = {false} 
          preload     = "metadata"
          loop        = {false}
          >

          
          <BigPlayButton position={'center'}/>
        
        
        </Player>
      </div>
    </section>
     
  )
}

export default withCursor(Video);

