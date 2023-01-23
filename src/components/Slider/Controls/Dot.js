import React from "react";
import { SliderContext } from "../Slider";

const Dot = ({ number }) =>  {
  const { goToSlide, slideNumber } = React.useContext(SliderContext);

  return (
    <div
      className={`slider__dot ${slideNumber === number ? "selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}

export default Dot;