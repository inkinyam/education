import './SMIcard.scss';
import { motion } from 'framer-motion';
import withCursor from "../../HOCs/withCursor";
import stop from '../../images/stop.jpg';
 
const SMIcard = ({title, description, picture, date, link, ...props}) => {
  const { onCursor } = props.context;


  return (
    <motion.div className    = "smicard"   >
        <a href         = {link}
           target       = "_blank" 
           rel          = "noreferrer" 
           className    = 'smicard__link'
           onMouseEnter = {() => {onCursor('more')}}
           onMouseLeave = {onCursor}>
             <img src = {picture===''? stop : picture} 
               alt = {title} 
               className = "smicard__img"/>
        </a>

        <h3 className = 'smicard__title'>
          <a href        = {link} 
             target       = "_blank" 
             rel          = "noreferrer" 
             onMouseEnter = {() => {onCursor('more')}}
             onMouseLeave = {onCursor}>
              {title}
          </a>
        </h3>

        <p className='smicard__description'
           onMouseEnter = {() => {onCursor('drag')}}
           onMouseLeave = {onCursor}>{description}</p>

        <small className='smicard__date'>{date}</small>
    </motion.div>
  )
}


export default withCursor(SMIcard);

