import './Works.scss';
import Title from '../Title/Title';
import CardList from '../CardList/CardList';
import { WorksCardData } from '../../utils/cardInfo';

const Works = () => {
   
  return (
    <section className='works'>
      <Title title='Работы студентов'> </Title>
      <CardList cardData = {WorksCardData}
                order    = {false}/>
    </section>
  )
}

export default Works;