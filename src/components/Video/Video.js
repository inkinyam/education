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
    src: 'https://dpo.genplanmos.ru/static/video/video.mp4',
    type: 'video/mp4'
  }]
}


const Video = () => {
  return (
    <section className="video" >
      <Title title ="Кому это полезно"/>
      <div className='video__layout'>
        <div className='video__bg'></div>
      </div>
      <div className="video__text">
        <p> Специалистам, которые занимаются управлением городов, для принятия тех или иных решений необходимо знать о 
          трендах в городском планировании и проектировании, разбираться в транспортных и экологических аспектах, 
          понимать современные проблемы городской среды.  
        </p>
        <p> Если вы хотите разобраться в нюансах разработки документов территориального планирования, 
          а также познакомиться с лучшими практиками разработки градостроительных решений, эксперты Института поделятся 
          с вами своими знаниями.</p>
      </div>
      
      <VideoJS  options ={videoJSOption}/>
    </section>
  )
}

export default Video;

  
