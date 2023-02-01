import './Lectionard.scss';
import withCursor from "../../HOCs/withCursor";

const Lectionard = ({data, color, ...props}) => {
  const { onCursor } = props.context;

  const lectioncardClassList = (color === 'blue')? 'lectioncard lectioncard_v_blue': 'lectioncard lectioncard_v_yellow'
  const topicClassList = data.topic? 'lectioncard__topic' : 'lectioncard__topic lectioncard__topic_hide';

  return (
    <li className={lectioncardClassList} onMouseEnter={onCursor}>
      <div className={topicClassList}>
        <small className='lectioncard__tag'>Тема</small>
        <h4 className='lectioncard__title'>{data.topic}</h4>
      </div>  
      <div className='lectioncard__topic'>
        <small className='lectioncard__tag'>Тезисы</small>
        <ul className='lectioncard__list'>
          {
            data.thesis.map((item, inx) => {
              return (
                <li key={inx} className='lectioncard__item'>{item}</li>
              )
            })
          }
        </ul>

        <small className='lectioncard__tag'>Лектор</small>
        <p className='lectioncard__lecturer'>{data.lecturer}</p>
      </div> 
    </li>
  )
}

export default withCursor(Lectionard);