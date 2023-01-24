import { useInView } from "react-intersection-observer";


const VebinarCard = ({props}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const cardClassList = inView? 'vebinar__item animated': 'vebinar__item';


  return (
    <li ref={ref} className={cardClassList}>
      <h4 className="vebinar__topic">{props.topic}</h4>
      <img className="vebinar__img" src={props.lecturerPhoto} alt={props.lecturer}/>
      <p className="vebinar__cardtext">Лектор: {props.lecturer}</p>
      <p className="vebinar__cardtext">Организатор: {props.organizer}</p>
    </li>
  )
}

export default VebinarCard;