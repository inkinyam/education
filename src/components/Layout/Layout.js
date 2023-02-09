import './Layout.scss';
import React from 'react';

import Lead from '../Lead/Lead';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

const Layout = () => {
  const [isLeadHide, setIsLeadHide] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleBurgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLeadHide(!isLeadHide)
  }

  return (
    <div className='layout'>
       <div className='layout__bg'>
        <span className='layout__horisontal'>
          <span className='layout__point'></span>
        </span>
        <span className='layout__vertical'>
          <span className='layout__point'></span>
        </span>
       <div className='layout__middle r1'></div>
        <div className='layout__middle r2'></div>
        <div className='layout__middle r3'></div>
        <div className='layout__small'></div>
      </div>
      <Navigation  handleButtonClick = {handleBurgerClick}/> 

      <MobileNavigation isMobileMenuOpen = {isMobileMenuOpen}
                        handleButtonClick = {handleBurgerClick}/>
                        
      <Lead  isLeadHide = {isLeadHide}/> 
      
      
    </div>
  )
}

export default Layout;