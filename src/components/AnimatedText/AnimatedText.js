import "./AnimatedText.scss";
import React from "react";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({text}) => {

  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true
  });

  const textClassNames = inView? 'AnimatedText__text animated': 'AnimatedText__text';

 
  return (
  <section className="AnimatedText">

    <div ref={ref}  className={textClassNames}>
                
    {
      text.split(' ').map((el, i) => {
        return <span data-item={el} key={i}>{el}</span>
      }) 
    }
    </div>
  </section>
  )


}

export default AnimatedText;