import './AccodionCard.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import withCursor from "../../HOCs/withCursor";
import Lectionard from '../Lectionard/Lectionard';

const AccodionCard = ({data, color, ...props}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { onCursor } = props.context;

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const setCursor = () => {
    if (color === 'yellow') {
      onCursor('more')
    }

    if (color === 'blue') {
      onCursor('bmore')
    }
  }

  const accordioncardClassList = inView? 'accordion__card animated' : 'accordion__card '

  const iconVariants = {
    open: { 
      rotate: 45,
      transition: {
        type: "ease",
        bounce: 0,
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    }, 
    close: { 
      rotate: 0,
      transition: {
        type: "ease",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05
      } }
  }
  
  const cardVariants = {
    open: {
      height: 'auto',
      marginBottom: 30, 
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    },
    closed: {
      margin: 0,
      height: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
  }

  return (
  <motion.div ref={ref} className = {accordioncardClassList}
              animate   = {isOpen ? "open" : "closed"}
              onClick = {() => {setIsOpen(!isOpen) }}
              onMouseEnter = {()=>{setCursor()}}
              onMouseLeave = {onCursor}>

    <div className='accordion__cardtitle' >
      <h4 className='accordion__title'>{data.chapterInfo}
        <p className=''>{data.chapter}</p>
      </h4>
      
      <motion.div className ='accordion__icon' 
                  variants  = {iconVariants}>
        <svg viewBox="0 0 24 24">
          <path d="M12 0V24" stroke="black" strokeWidth="2"/>
          <path d="M24 12L-9.53674e-07 12" stroke="black" strokeWidth="2"/>
        </svg>
      </motion.div>
    </div>

    <motion.div className = 'accordion__content' 
                variants = {cardVariants} >
        <ul className='accordion__list'>
          {
            data.lecture.map((item, inx) => {
              return(
                <Lectionard key   = {inx} 
                            data  = {item}
                            color = {color}/>
              )
            })
          }
        </ul>      
    </motion.div>
  </motion.div>
  )
}

export default withCursor(AccodionCard);