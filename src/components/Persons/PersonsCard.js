import { useInView } from "react-intersection-observer";


const PersonsCard = ({props}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const cardClassList = inView? 'persons__item animated': 'persons__item';


  return (
    <li ref={ref} className={cardClassList}>
      <h4 className="persons__topic">{props.topic}</h4>
      <img className="persons__img" src={props.lecturerPhoto} alt={props.lecturer}/>
      <p className="persons__cardtext">{props.lecturer}</p>
      <p className="persons__job">{props.job}</p>
    </li>
  )
}

export default PersonsCard;