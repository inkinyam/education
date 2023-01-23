import React from "react";
import Slide from "./Slide";

import { SliderContext } from "../Slider";

const  SlidesList = () => {
  const { slideNumber, items } = React.useContext(SliderContext);

  return (
    <div
      className="slider__list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
}

export default SlidesList;