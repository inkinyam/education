import './Accodion.scss';
import React from 'react';
import Title from '../Title/Title';
import AccodionCard from '../AccodionCard/AccodionCard';


import {lectionInfo, vebinarsInfo} from '../../utils/cardInfo';

const Accodion = () => {
 
  return (
    <section className='accordion'>
      <Title title='Содержание и структура курса'></Title>

      <h2 className='accordion__subtitle'>Лекции в формате вебинаров</h2>
        <div className='accordion__cards'>
          {
            vebinarsInfo.map(item => {
              return (
                <AccodionCard key   = {item.id}
                              data  = {item}
                              color = {'yellow'} />
              )
            })
          }
        </div>

      <h2 className='accordion__subtitle accordion__subtitle_secondblock'>Лекции в записи</h2>
        <div className='accordion__cards'>
          {
            lectionInfo.map(item => {
              return (
                <AccodionCard key   = {item.id}
                              data  = {item}
                              color = {'blue'} />
              )
            })
          }
        </div>
    </section>
    
  )
}


export default Accodion;