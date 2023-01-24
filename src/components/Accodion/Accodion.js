import './Accodion.scss';
import React from 'react';
import Title from '../Title/Title';
import AccodionCard from '../AccodionCard/AccodionCard';


import {chaptersInfo} from '../../utils/cardInfo';

const Accodion = () => {
 
  return (
    <section className='accordion'>
      <Title title='Содержание курса. 11 лекций в записи'></Title>
        <div className='accordion__cards'>
          {
            chaptersInfo.map(item => {
              return (
                <AccodionCard key  = {item.id}
                              data = {item} />
              )
            })
          }
        </div>
    </section>
    
  )
}


export default Accodion;