import React from "react";
import { SliderContext } from "../Slider";
import Dot from "./Dot";


const Dots= () => {
  const { slidesCount } = React.useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className="slider__dots">{renderDots()}</div>;
}

export default Dots;