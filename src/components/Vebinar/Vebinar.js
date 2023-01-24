import './Vebinar.scss';
import Title from '../Title/Title';
import VebinarCard from './VebinarCard';
 import {VebinarsData} from '../../utils/cardInfo';


const Vebinar = () => {
  return (
    <section className='vebinar'>
      <div className='vebinar__layout'>
        <div className='vebinar__bg'></div>
      </div>

      <div className='vebinar__content'>
        <Title title='Содержание курса. 8 лекций в формате вебинаров'/>
        <h2 className='vebinar__subtitle'>8 лекций в формате вебинаров с возможностью обратной связи от преподавателя</h2>

        <ul className='vebinar__list'>
          {VebinarsData.map(card => {
              return (
                <VebinarCard key = {card.id}
                            props = {card}                              
                />
              )
            })}
        </ul>
      </div>
    </section>
  )
}

export default Vebinar;