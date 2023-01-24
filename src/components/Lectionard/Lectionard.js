import './Lectionard.scss';

const Lectionard = ({data}) => {
  return (
    <li className='lectioncard'>
      <div className='lectioncard__topic'>
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

export default Lectionard;