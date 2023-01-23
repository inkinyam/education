import React from "react";
import SlideImage from "./SlideImage";
import stop from '../../../images/stop.jpg'


const  Slide = ({ data: { image, title } }) => {

  return (
    <div className="slider__slide">
      <SlideImage src={image===''? stop : image} alt={title} />
    </div>
  );
}

export default Slide;