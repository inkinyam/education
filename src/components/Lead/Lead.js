import './Lead.scss';
import React from 'react';
import { Link } from 'react-scroll';
import withCursor from "../../HOCs/withCursor";

const Lead = ({isLeadHide, ...props}) => {
  const { onCursor } = props.context;
  const lineref = React.useRef(null);

const leadClassList  = isLeadHide? 'lead_hide': 'lead';

  return (
    <section className={leadClassList} >
      <div className='lead__content'>
        
          <div className='lead__title'>
            <small className='lead__title-info'>Дополнительная профессиональная программа повышения квалификации</small>
            <h1> «Актуальные аспекты градостроительной деятельности»</h1> 
            <div className='lead__buttonbox' ref = {lineref}>
              <Link smooth={true}  
                        to="form" 
                        
                        className='lead__button'  
                        onMouseEnter = {() => onCursor('big')} 
                        onMouseLeave = {onCursor}> 
                          Заполнить заявку
              </Link>
            </div>
           
          </div>
      
        <div className="lead__startpoint"></div>


        <div className='lead__infoblock'>
          <small className='lead__title-info'>Дополнительная профессиональная программа повышения квалификации</small>
          <p className='lead__info'>обучающий курс разработан и проводится Институтом Генплана Москвы совместно с НИУ МГСУ</p>
        </div>

      </div>


     
    </section>
  )
}

export default withCursor(Lead);