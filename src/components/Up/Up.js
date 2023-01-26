import React from "react";
import "./Up.scss";

const Up = () => {
const [isVisible, setIsVisible] = React.useState(false);


const toggleVisible = () => {
  const scrolled = document.documentElement.scrollTop;
  if (scrolled > 800){
    setIsVisible(true)
  } 
  else if (scrolled <= 800){
    setIsVisible(false)
  }
};

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
};

window.addEventListener('scroll', toggleVisible);

const buttonClassNames = isVisible? 'up up_active' : 'up';
  return(
    <>
    <button className={buttonClassNames}
            onClick={scrollToTop}/>
    </>
  )
}

export default Up;