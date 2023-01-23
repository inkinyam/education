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
            <h1>Практика</h1> 
            <span>
              <p>в&nbsp;Институте</p>
              <p>Генплана</p>   
              <p>Москвы 
                <Link smooth={true}  
                      to="form" 
                      className='lead__button'  
                      onMouseEnter = {() => onCursor('big')} 
                      onMouseLeave = {onCursor}> 
                        Заполнить заявку
                </Link>
              </p>
            </span>
            <p>в&nbsp;Институте Генплана Москвы</p>
            <Link smooth={true}  
                      to="form" 
                      className='lead__button lead__button_mobile'> 
                        Заполнить заявку
            </Link>
          </div>
      
        <div className="lead__startpoint"></div>


        <div className='lead__infoblock'>
          <p className='lead__info'>ждем студентов, изучающих специальности:</p>
          <p className='lead__prof'>Архитектор, Инженер, Экономист, Социолог, Эколог, Аналитик, ГИС-специалист, Урбанист</p>
        </div>

      </div>


     
    </section>
  )
}

export default withCursor(Lead);