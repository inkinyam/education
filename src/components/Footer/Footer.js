import './Footer.scss';
import { Link } from 'react-router-dom';
import withCursor from "../../HOCs/withCursor";

const Footer = props => {
  const { onCursor } = props.context;

 return (
  <footer className='footer'>
    <div className='footer__container'>
      <div className='footer__box'>
        <h4 className='footer__title'>© 2023 Институт Генплана Москвы</h4>
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
        <h4 className='footer__title'>По вопросам: e.gnezdilova@genplanmos.ru</h4>
        <div className='footer__links'>
          <a className='footer__link' 
              href='https://t.me/genplan_institute'
              target="_blank"
              rel="noreferrer"
              onMouseEnter = {() => {onCursor('big')}}
              onMouseLeave = {onCursor}>
                Telegram</a>
          <a className='footer__link' 
              href='https://vk.com/genplanmos/'
              target="_blank"
              rel="noreferrer"
              onMouseEnter = {() => {onCursor('big')}}
              onMouseLeave = {onCursor}>
                Vkontakte</a>  
          <a  className='footer__link' 
              href='https://genplanmos.ru/'
              onMouseEnter = {() => {onCursor('big')}}
              onMouseLeave = {onCursor}>
                Сайт Инстиута</a>  
        </div>
      </div>
    </div>
  </footer>
 )
}

export default withCursor(Footer);