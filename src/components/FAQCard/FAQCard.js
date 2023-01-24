import './FAQCard.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import withCursor from "../../HOCs/withCursor";


const FAQCard = ({question, answer, ...props}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { onCursor } = props.context;

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const FAQCardClassList = inView? 'faq__card animated' : 'faq__card '


  return (
  <motion.div ref={ref} className = {FAQCardClassList}
              animate   = {isOpen ? "open" : "closed"}
              onClick = {() => {setIsOpen(!isOpen) }}
              onMouseEnter = {() => {onCursor('more')}}
              onMouseLeave = {onCursor}>

    <div className='faq__cardtitle' >
      <h4 className='faq__title '>{question}</h4>
      <motion.div className ='faq__icon' 
                  variants  = {{
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
                    }}>
        <svg viewBox="0 0 24 24">
          <path d="M12 0V24" stroke="black" strokeWidth="2"/>
          <path d="M24 12L-9.53674e-07 12" stroke="black" strokeWidth="2"/>
        </svg>
      </motion.div>
    </div>
   

    <motion.div className = 'faq__text' 
                variants={{
                  open: {
                    height: 'auto',
                    marginTop: 16,
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
                }}
               >
               {answer}
    </motion.div>
  </motion.div>
  )
}

export default withCursor(FAQCard);