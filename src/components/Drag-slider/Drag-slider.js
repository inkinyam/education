import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

import './Drag-slider.scss';

const SliderWrap = ({
  children,
  sliderRef,
  x,
  sliderConstraints,
  bounceStiffness,
  bounceDamping
}) => {
  return (
    <motion.div style={{ overflowX: "hidden" }}>
      <motion.div className      = "dragSlider__wrapper"
           ref            = {sliderRef}
           drag           = "x"
           initial        = {{ x: 0 }}
           style          = {{ x }}
           dragConstraints = {{
              left: -sliderConstraints,
              right: 0
           }}
          dragTransition   = {{ bounceStiffness, bounceDamping }} >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const DragSlider = ({ children, bounceStiffness = 300,  bounceDamping =20, data }) => {
  const ref = useRef();
  const x   = useMotionValue(0);

  const [sliderWidth, setSliderWidth]                 = useState(0);
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
  const [sliderConstraints, setSliderConstraints]     = useState(0);



  useEffect(() => {
    if (!ref && !ref.current) return;


    const calcSliderChildrenWidth = () => {
      setSliderChildrenWidth(
        ref?.current?.scrollWidth
      );
    };

    calcSliderChildrenWidth();

    const calcSliderWidth = () => {
      setSliderWidth(ref?.current?.clientWidth);
    };

    calcSliderWidth();
    window.addEventListener("resize", calcSliderWidth);

    const calcSliderConstraints = () => {
      setSliderConstraints(sliderChildrenWidth - sliderWidth);
    };

    calcSliderConstraints();
    window.addEventListener("resize", calcSliderConstraints);
  },  [ref, sliderChildrenWidth, sliderWidth, data]);

  return (
    <SliderWrap
      sliderRef         = {ref}
      x                 = {x}
      sliderConstraints = {sliderConstraints}
      bounceStiffness   = {bounceStiffness}
      bounceDamping     = {bounceDamping}>
      {children}

    </SliderWrap>
  );
};
