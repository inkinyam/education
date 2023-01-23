import "./Loader.scss";
import React from "react";
import Logo from '../../images/logo.svg';
import { motion } from "framer-motion";



const Loader = ({isLoading}) => {
const containerRef = React.useRef(null);
  
const loaderVar = {
  open: {
    opacity: 1,
    visibility: 'visible',
    height: '100%'
  },
  closed: {
    opacity: 0,
    visibility: 'hidden',
    height: 0,
    transition: {
      duration: 0
    }
  }
}

  return (
    <motion.div className='loader'
                initial={false}
                animate={isLoading? 'open': 'closed'}
                ref={containerRef}
                variants={loaderVar}>
        <motion.div className="loader__background">
          <motion.img src={Logo} 
                      alt="логотип Институт Генплана Москвы"
                      animate={{scale: 20, rotate: 360}}
                      transition={{
                        duration:3
                      }}/>
        </motion.div>
    </motion.div>
  )
}

export default Loader;