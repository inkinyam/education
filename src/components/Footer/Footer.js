import './Footer.scss';
import withCursor from "../../HOCs/withCursor";

const Footer = props => {
  const { onCursor } = props.context;

 return (
  <footer className='footer'>
    <div className='footer__container'>
      <div className='footer__box'>
        <h4 className='footer__title'>© 2023 Институт Генплана Москвы</h4>
        <a className='footer__link' 
           href='https://genplanmos.ru/policypersonaldata/'
           target='_blank'
           rel='noreferrer'
           onMouseEnter = {() => {onCursor('big')}}
           onMouseLeave = {onCursor}>
             Политика обработки персональных данных</a>

        <a className='footer__link' 
           href='https://genplanmos.ru/useragreement/'
           target='_blank'
           rel='noreferrer'
           onMouseEnter = {() => {onCursor('big')}}
           onMouseLeave = {onCursor}>
            Пользовательское соглашение</a>
      </div>

      <div className='footer__box'>
        <h4 className='footer__title'>Мы находимся по адресу:</h4>
        <p className='footer__text'>«Институт Генплана Москвы» 125047, </p>
        <p className='footer__text'>Москва, ул. Гашека, 14/13 (АО Моспроект)</p>
      </div>

      <div className='footer__box'>
        <h4 className='footer__title'>По вопросам:  
        <a href='mailto:aterekhova@genplanmos.ru'
           title='Терехова Анна'
           onMouseEnter = {() => {onCursor('big')}}
           onMouseLeave = {onCursor}> aterekhova@genplanmos.ru</a></h4>
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
              target="_blank"
              rel="noreferrer"
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