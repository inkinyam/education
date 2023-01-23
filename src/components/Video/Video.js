import "./Video.scss"
import React from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import internshipVideo from '../../videos/praktika.mp4';
import internshipCover from '../../images/videoCover.jpg';



const Video = () => {
  return (
    <section className="video">
      <Player
        playsInline
        poster      = {internshipCover}
        src         = {internshipVideo}
        fluid       = {true}
        muted       = {true}
        aspectRatio = "auto"
        autoPlay    = {true} 
        loop        = {true}>
        <ControlBar disableCompletely={true}/>
        <BigPlayButton position={'center'}/>
      
      
      </Player>
    </section>
     
  )
}

export default Video;

