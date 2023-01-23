import "./MobileNavigation.scss";
import React from "react";
import { Link } from 'react-scroll';
import logo from '../../images/logo.svg';

import { motion } from "framer-motion";

const MobileNavigation = ({isMobileMenuOpen, handleButtonClick}) => {

  const handleBurgerClick = () => {
    handleButtonClick();
  }

    const menuVariants = {
      open: {
        opacity: 1,
        left: 0
      },
      closed: {
        opacity: 0,
        left: -1000,
        transition: {
          duration: 0
        }
      }
    }
    const menuItemVariants = {
      open: {
        x: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 }
        }
      },
      closed: {
        x: -50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 }
        }
      }
    }
    const menuBarVariants = {
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
      }
    }

const navClass = isMobileMenuOpen? "mobileNavigation mobileNavigation_opened" : "mobileNavigation";

  return ( 
    
    <motion.div className={navClass} 
                initial={false}
                animate={isMobileMenuOpen? "open" : "closed"}> 
                
      <div className='layout__bg'>
        <div className='layout__big'></div>
        <div className='layout__middle r1'></div>
        <div className='layout__middle r2'></div>
        <div className='layout__middle r3'></div>
        <div className='layout__middle r4'></div>
        <div className='layout__small'></div>
      </div>

      <div className='mobileNavigation__header'>
        <Link to='genplanmos.ru' className="mobileNavigation__logo"> 
          <img src={logo} alt="логотип"/>
        </Link>
        
        <button className="mobileNavigation__burger" onClick={handleBurgerClick}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path d='M 4 4 L 36 36'/>
            <path d='M 36 4 L 4 36'/>
          </svg>
        </button>
      </div>

      <motion.div className="mobileNavigation__menu"
                  variants={menuVariants}>

        <motion.ul className="mobileNavigation__list"
                  variants={menuBarVariants}>
          <motion.li className="mobileNavigation__item"
                    variants={menuItemVariants}> 
            <Link to="about" 
                  onClick={handleBurgerClick}    
                  smooth={true} 
                  className='mobileNavigation__link'>Как проходит</Link>  
          </motion.li>

          <motion.li className="mobileNavigation__item"
                    variants={menuItemVariants}> 
            <Link to="phases" 
                  onClick={handleBurgerClick}  
                  smooth={true}  
                  className='mobileNavigation__link'>О программе</Link>   
          </motion.li>

          <motion.li className="mobileNavigation__item"
                    variants={menuItemVariants}> 
            <Link to="howItWas" 
                  onClick={handleBurgerClick}
                  smooth={true} 
                  className='mobileNavigation__link'>Вебинары</Link>   
          </motion.li>

          <motion.li className="mobileNavigation__item"
                    variants={menuItemVariants}> 
            <Link to="howItWas" 
                  onClick={handleBurgerClick}
                  smooth={true} 
                  className='mobileNavigation__link'>Лекции в записи</Link>  
          </motion.li>

          <motion.li className="mobileNavigation__item"
                    variants={menuItemVariants}> 
            <Link to="programs" 
                  onClick={handleBurgerClick}  
                  smooth={true} 
                  className='mobileNavigation__link'>Подать заявку</Link>  
          </motion.li>
        </motion.ul>


        <motion.ul className="mobileNavigation__list"
                  variants={menuBarVariants}>

          <motion.li className="mobileNavigation__item"
                      variants={menuItemVariants}> 
              <Link to="#" className='mobileNavigation__link'>Vkontakte</Link> 
          </motion.li>

          <motion.li className="mobileNavigation__item"
                      variants={menuItemVariants}> 
              <Link to="#" className='mobileNavigation__link'>Telegram</Link> 
          </motion.li>

        </motion.ul>
      </motion.div>

      
    </motion.div>

  )
}


export default MobileNavigation;
