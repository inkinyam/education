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
      <Title title ="Как это будет"/>
      <div className='video__layout'>
        <div className='video__bg'></div>
      </div>
      <p className="video__text">
          Равным образом консультация с широким активом позволяет оценить значение соответствующий условий активизации. 
          Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции обеспечивает широкому кругу 
          (специалистов) участие в формировании модели развития. Значимость этих проблем настолько очевидна, что консультация с широким 
          активом обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. 
      </p>
      <VideoJS  options ={videoJSOption}/>
    </section>
  )
}

export default Video;

