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
    <header className = "navigation">
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
        <Link to="about"     smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >О программе</Link> 
        <Link to="video"     smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Как это будет</Link> 
        <Link to="accordion" smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Содержание курса</Link> 
        <Link to="persons"   smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Наши лекторы</Link> 
        <Link to="faq"       smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Частые вопросы</Link> 
        <Link to="form"      smooth={true} onMouseEnter = {() => onCursor('big')} onMouseLeave = {onCursor} className='navigation__link' >Подать заявку</Link> 
      </nav>

      <button className="navigation__burger" onClick={handleBurgerClick}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path d ="M 2 13.5 L 38 13.5"/>
            <path d ="M 2 27 L 38 27"/>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default withCursor(Navigation);