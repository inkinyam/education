import './SMI.scss';
import Title from '../Title/Title';
import SMIcard from '../SMIcard/SMIcard';
import { DragSlider } from '../Drag-slider/Drag-slider';





const SMI = ({SMICardsData}) => {

  return (
    <section className='smi'>
      <Title title='Сми о стажировке'></Title>
   
        <DragSlider data={SMICardsData}>
        { SMICardsData.map(card => {    
          return  ( 
              <SMIcard  key               = {card.id}
                        title             = {card.title}
                        description       = {card.description}
                        picture           = {card.image}
                        date              = {card.date}
                        link              = {card.link}
              />)
            })
        }
        </DragSlider>


    </section>
  )
}

export default SMI;


