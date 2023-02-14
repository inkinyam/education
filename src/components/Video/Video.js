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
      <Title title ="Как это будет"/>
      <div className='video__layout'>
        <div className='video__bg'></div>
      </div>
      <p className="video__text">
        Подробнее о формате курса вы можете посмотреть в трейлере.
        Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют определения и уточнения 
        модели развития. С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и 
        модернизации системы обучения кадров, соответствует насущным потребностям.
      </p>
      <VideoJS  options ={videoJSOption}/>
    </section>
  )
}

export default Video;

