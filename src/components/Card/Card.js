import './Card.scss';

import { useInView } from "react-intersection-observer";

const Card = ({title, description, picture, order}) => {
 
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });


  const descriptionClassList = order? 'card__description' : 'card__description card__description_first'
  const pictureClassList = (picture  ==='')? 'card__picture_hidden': 'card__picture';
  const cardClassList = inView? 'card animated': 'card';
  
  return (
    <section ref={ref}  className={cardClassList}>
      <h4 className='card__title'>{title}</h4>
      <p className={descriptionClassList}>{description}</p>
      <img src={picture} alt={title} className = {pictureClassList}/>

    </section>
  )
}

export default Card;