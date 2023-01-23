import './CardList.scss';
import Card from '../Card/Card';

const CardList = ({cardData, order}) => {
 
  return (
    <section className='cardList'>
      <ul className='cardList__list'>
        {cardData.map(card => {
          return (
            <Card key         = {card.id}
                  title       = {card.title}
                  description = {card.description}
                  picture     = {card.image}
                  order       = {order}
            />
          )
        })}
      </ul>

    </section>
  )
}

export default CardList;