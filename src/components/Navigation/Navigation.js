import "./Navigation.scss";
import { Link } from 'react-scroll';
import logo from '../../images/logo.svg';
import withCursor from "../../HOCs/withCursor";



const Navigation = ({handleButtonClick, ...props}) => {
  const { onCursor } = props.context;
  
const handleBurgerClick =() => {
  handleButtonClick();
}

 return (
    <section className = "navigation">
      <div className = "navigation__container">
        <a href      = 'https://genplanmos.ru/' 
           target    = "_blank" 
           rel       = "noreferrer" 
           className = "navigation__logo"
           onMouseEnter = {() => onCursor('big')} 
           onMouseLeave = {onCursor} > 
             <img src={logo} alt="логотип"/>
        </a>
        <nav className="navigation__list">
        <Link to="about"     smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Как проходит</Link> 
        <Link to="phases"    smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Сроки и этапы</Link> 
        <Link to="howItWas"  smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Стажировка 2022</Link> 
        <a href="https://internship.genplanmos.ru/" onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' target='_blank' rel='noreferrer'>Стажировка 2021</a> 
        <Link to="programs"  smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Программы</Link> 
      </nav>

      <button className="navigation__burger" onClick={handleBurgerClick}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path d ="M 2 13.5 L 38 13.5"/>
            <path d ="M 2 27 L 38 27"/>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default withCursor(Navigation);