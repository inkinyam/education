import './Persons.scss';
import Title from '../Title/Title';
import PersonsCard from './PersonsCard';



const Persons = ({title, personData}) => {
  return (
    <section className='persons'>
      <div className='persons__content'>
        <Title title={title}/>
  
        <ul className='persons__list'>
          {personData.map(card => {
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