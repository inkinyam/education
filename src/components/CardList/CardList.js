import './CardList.scss';
import Card from '../Card/Card';

const CardList = ({cardData}) => {
 
  return (
    <section className='cardList'>
      <ul className='cardList__list'>
        {cardData.map(card => {
          return (
            <Card key   = {card.id}
                  props = {card}
                               
            />
          )
        })}
      </ul>

    </section>
  )
}

export default CardList;