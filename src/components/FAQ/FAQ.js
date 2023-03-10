import './FAQ.scss';
import React from 'react';
import Title from '../Title/Title';
import FAQCard from '../FAQCard/FAQCard';


import {faqInfo} from '../../utils/cardInfo'

const FAQ = () => {
 
  return (
    <section className='faq'>
      <Title title='Часто задаваемые вопросы'></Title>
        <div className='faq__cards'>
          {
            faqInfo.map(item => {
              return (
                <FAQCard key      = {item.id}
                         question = {item.question}
                         answer   = {item.answer} />
              )
            })
          }
        </div>
    </section>
    
  )
}


export default FAQ;