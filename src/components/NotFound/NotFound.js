
import './NotFound.scss';
import withCursor from "../../HOCs/withCursor";
import { Link } from 'react-router-dom';


const NotFound = ({...props}) => {
  const { onCursor } = props.context;

  return (
    <section className='notfound'>
      <h3 className='notfound__title'>404</h3>
      <Link to={-1}
            className='notfound__button'
            onMouseEnter = {() => {onCursor('big')}}
            onMouseLeave = {onCursor}>
              Назад
      </Link>
    </section>
  )
}

export default withCursor(NotFound);