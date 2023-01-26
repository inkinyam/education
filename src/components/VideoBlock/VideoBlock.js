import "./VideoBlock.scss"
import React from 'react';
import { Player, BigPlayButton } from 'video-react';

import Poster from '../../images/videoPoster.jpg';
import withCursor from "../../HOCs/withCursor";
import Title from "../Title/Title";

const VideoBlock = ({...props}) => {
  const { onCursor } = props.context;
  return (
    <section className="video" >
      <Title title ="о программе"/>
      
     
    </section>
     
  )
}

export default withCursor(VideoBlock);

