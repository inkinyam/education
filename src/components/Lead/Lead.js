import './Lead.scss';
import React from 'react';
import { Link } from 'react-scroll';
import withCursor from "../../HOCs/withCursor";

const Lead = ({isLeadHide, ...props}) => {
  const { onCursor } = props.context;

const leadClassList  = isLeadHide? 'lead_hide': 'lead';

  return (
    <section className={leadClassList} >
      <div className='lead__content'>
        
          <div className='lead__title'>
            <h1>Программа повышения <br/> квалификации<br/> «Градостроительная база»</h1> 
            <Link smooth={true}  
                      to="form" 
                      className='lead__button'  
                      onMouseEnter = {() => onCursor('big')} 
                      onMouseLeave = {onCursor}> 
                        Заполнить заявку
            </Link>
          </div>
      
        <div className="lead__startpoint"></div>


        <div className='lead__infoblock'>
          <p className='lead__info'>обучающий курс разработкн и проводится</p>
          <p className='lead__info'>Институтом Генплана Москвы совместно с НИУ МГСУ</p>
        </div>

      </div>


     
    </section>
  )
}

export default withCursor(Lead);