import React from "react";
import { SliderContext } from "../Slider";
import withCursor from "../../../HOCs/withCursor";

const Arrows = props => {
  const { onCursor } = props.context;
  const { changeSlide } = React.useContext(SliderContext);

  return (
    <div className="arrows">
      <div className="arrow left" 
           onClick={() => changeSlide(-1)} 
           onMouseEnter = {() => onCursor('left')} onMouseLeave = {onCursor}/>
           
      <div className="arrow right" 
           onClick={() => changeSlide(1)}  
           onMouseEnter = {() => onCursor('right')} onMouseLeave = {onCursor}/>
    </div>
  );
}

export default withCursor(Arrows);