
import './NotFound.scss';
import withCursor from "../../HOCs/withCursor";
import { Link } from 'react-router-dom';


const NotFound = ({...props}) => {
  const { onCursor } = props.context;

  return (
    <section className='notfound'>
    <div className='layout__bg'>
      <div className='layout__big'></div>
      <div className='layout__middle r1'></div>
      <div className='layout__middle r2'></div>
      <div className='layout__middle r3'></div>
      <div className='layout__middle r4'></div>
      <div className='layout__small'></div>
    </div>

    <div className='notfound__content'>
      <h3 className='notfound__title'>404</h3>
      <Link to={-1}
            className='notfound__button'
            onMouseEnter = {() => {onCursor('big')}}
            onMouseLeave = {onCursor}>
              Назад
      </Link>
    </div>
   
  </section>
  )
}

export default withCursor(NotFound);