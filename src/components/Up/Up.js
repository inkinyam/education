import React from "react";
import "./Up.scss";

const Up = () => {
const [isVisible, setIsVisible] = React.useState(false);

  const handleUpClick =() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

const handleShowButton =() => {
  setIsVisible(true);
}

const habdleHideButton = () => {
  setIsVisible(false)
}



const buttonClassNames = isVisible? 'up up_active' : 'up';
  return(
    <>
    <button className={buttonClassNames}
            onClick={handleUpClick}/>
    </>
  )
}

export default Up;