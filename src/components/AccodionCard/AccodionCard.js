import './AccodionCard.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import withCursor from "../../HOCs/withCursor";
import Lectionard from '../Lectionard/Lectionard';

const AccodionCard = ({data, ...props}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { onCursor } = props.context;

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

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
      marginBottom: 16, 
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
              onMouseEnter = {() => {onCursor('more')}}
              onMouseLeave = {onCursor}>

    <div className='accordion__cardtitle' >
      <h4 className='accordion__title '>{data.chapter}</h4>
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
                <Lectionard key={inx} data={item}/>
              )
            })
          }
        </ul>      
    </motion.div>
  </motion.div>
  )
}

export default withCursor(AccodionCard);