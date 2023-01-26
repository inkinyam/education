import "./Video.scss"
import React from 'react';

import Title from "../Title/Title";
import VideoJS from "../VideoJS/VideoJS";
import Poster from '../../images/videoPoster.jpg';

const videoJSOption = {
  controls: true,
  poster: Poster,
  preload: 'metadata',
  fluid: true,
  sources: [{
    src: 'http://kmv.genplanmos.ru/static/video/praktika_6_Mb.mp4',
    type: 'video/mp4'
  }]
}


const Video = () => {
  return (
    <section className="video" >
      <Title title ="о программе"/>
      <VideoJS  options ={videoJSOption}/>
    </section>
  )
}

export default Video;

