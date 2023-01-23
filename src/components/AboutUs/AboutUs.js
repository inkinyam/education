import "./AboutUs.scss";
import withCursor from "../../HOCs/withCursor";
import SmileyBackground from "../SmileyBackground/SmileyBackground";
import React from "react";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

const AboutUs = ({isAnimated, isHasButton, text, ...props}) => {
  const { onCursor } = props.context;

  const { ref, inView } = useInView({
    threshold: 0.9,
  });


  const buttonClassList = isHasButton? "aboutUs__button" :"aboutUs__button aboutUs__button_hide"; 
  const textClassNames = inView? 'aboutUs__text animated': 'aboutUs__text';


  
  return (
  <section className="aboutUs">
    <div ref={ref}  className={textClassNames}>
                
    {
      text.split(' ').map((el, i) => {
        return <span data-item={el} key={i}>{el}</span>
      }) 
    }
    </div>
    <Link className={buttonClassList} 
          to="form" 
          smooth={true}  
          onMouseEnter = {() => onCursor('big')} 
          onMouseLeave = {onCursor}> 
        Заполнить заявку
    </Link>
    { isAnimated? <SmileyBackground/>: ''}
  </section>
  )


}

export default withCursor(AboutUs);