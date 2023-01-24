import './Card.scss';

import { useInView } from "react-intersection-observer";

const Card = ({props}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });


  const cardClassList = inView? 'card animated': 'card';
  
  return (
    <li ref={ref}  className={cardClassList}>
      <h4 className='card__title'>{props.title}</h4>
      <ul className='card__list'>
        {props.info.map((item, indx) => {
          return (
            <li key={indx}> { item } </li>
          )
        })}
        
      </ul>


    </li>
  )
}

export default Card;