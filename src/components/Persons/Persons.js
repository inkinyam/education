import './Persons.scss';
import Title from '../Title/Title';
import PersonsCard from './PersonsCard';
 import {PersonsInfo} from '../../utils/cardInfo';


const Persons = () => {
  return (
    <section className='persons'>
      <div className='persons__layout'>
        <div className='persons__bg'></div>
      </div>

      <div className='persons__content'>
        <Title title='Наши лекторы'/>
  
        <ul className='persons__list'>
          {PersonsInfo.map(card => {
              return (
                <PersonsCard key = {card.id}
                            props = {card}                              
                />
              )
            })}
        </ul>
      </div>
    </section>
  )
}

export default Persons;