import './Slider.scss';

import PropTypes from "prop-types";
import React from 'react';

import Arrows from './Controls/Arrows';
import Dots from './Controls/Dots';
import SlidesList from './Components/SlidesList';

export const SliderContext = React.createContext();


const Slider = ({autoPlay, autoPlayTime, width, height, cardData}) => {
  const [items, setItems] = React.useState([]);
  const [slide, setSlide] = React.useState(0);
  const [touchPosition, setTouchPosition] = React.useState(null);
  const [mousePosition, setMousePosition] = React.useState(null);

  
 React.useEffect(() => {
      setItems(cardData);
  }, [cardData]); 


  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };


  const goToSlide = (number) => {
    setSlide(number % items.length);
  };


  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }

/*   const habdleMouseStart = (e) => {
    const mousDown = e.clientX;
    setMousePosition(mousDown);
  }


  const handlMouseMove = (e) => {
    if (mousePosition === null) {
      return;
    }

    const currentPosition = e.сlientX;
    const direction = mousePosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }
 */
  React.useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]); 


  return (
    <div
      style={{ width, height }}
      className="slider"
      onTouchStart = {handleTouchStart}
      onTouchMove  = {handleTouchMove}
 /*      onMouseDown  = {habdleMouseStart}
      onMouseMove  = {handlMouseMove} */
    >
      <SliderContext.Provider
        value={{ goToSlide,
                 changeSlide,
                 slidesCount: items.length,
                 slideNumber: slide,
                 items,
                }}
      >
        <Arrows /> 
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div> 
  );
};

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  sliderContent: PropTypes.array
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%",
  sliderContent: []
};

export default Slider;