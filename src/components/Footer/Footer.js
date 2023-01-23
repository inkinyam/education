import './Footer.scss';
import { Link } from 'react-router-dom';
import withCursor from "../../HOCs/withCursor";

const Footer = props => {
  const { onCursor } = props.context;

 return (
  <footer className='footer'>
    <div className='footer__container'>
      <div className='footer__box'>
        <h4 className='footer__title'>© 2022 Институт Генплана Москвы</h4>
        <Link className='footer__link' 
              to='#'
              onMouseEnter = {() => {onCursor('big')}}
              onMouseLeave = {onCursor}>
                Политика обработки персональных данных</Link>

        <Link className='footer__link' 
              to='#'
              onMouseEnter = {() => {onCursor('big')}}
              onMouseLeave = {onCursor}>
                Пользовательское соглашение</Link>
      </div>

      <div className='footer__box'>
        <h4 className='footer__title'>Мы находимся по адресу:</h4>
        <p className='footer__text'>«Институт Генплана Москвы» 125047, </p>
        <p className='footer__text'>Москва, ул. Гашека, 14/13 (АО Моспроект)</p>
      </div>

      <div className='footer__box'>
        <h4 className='footer__title'>По вопросам: egurvich@genplanmos.ru</h4>
        <div className='footer__links'>
          <Link className='footer__link' 
              to='#'
              onMouseEnter = {() => {onCursor('big')}}
              onMouseLeave = {onCursor}>
                Telegram</Link>
          <Link className='footer__link' 
              to='#'
              onMouseEnter = {() => {onCursor('big')}}
              onMouseLeave = {onCursor}>
                Vkontakte</Link>  
        </div>
      </div>
    </div>
  </footer>
 )
}

export default withCursor(Footer);