import './Cookie.scss';
import React from 'react';
import withCursor from "../../HOCs/withCursor";

const Cookie = ({isClosed, handleCloseClick, ...props}) => {
  const { onCursor } = props.context;

  const handleClick = () => {
    handleCloseClick();
  }


  const cookieClassNames = isClosed? 'cookie' : 'cookie cookie_open'
  
  return (
  <div className={cookieClassNames}>
    <button className='cookie__close'
            onMouseEnter = {() => onCursor('big')} 
            onMouseLeave = {onCursor}
            onClick = {handleClick}>
    </button>
    <h3 className='cookie__title'>Мы используем Cookies</h3>
    <p className='cookie__text'> Используя этот сайт, вы подтверждаете свое согласие на использование  файлов cookie в соответствии с  
        <a href='https://genplanmos.ru/policypersonaldata/' 
           onMouseEnter = {() => onCursor('big')} 
           onMouseLeave = {onCursor}
           target='_blank'
           rel='noreferrer'>Политикой ГАУ «Институт Генплана Москвы»</a> 
        в отношении личных данных пользователей.</p>
  </div>
  )
}

export default withCursor(Cookie);