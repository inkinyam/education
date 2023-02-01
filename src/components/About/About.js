import './About.scss';
import Title from '../Title/Title';
import CardList from '../CardList/CardList';
import Card from '../Card/Card';
import { AboutCardData } from '../../utils/cardInfo';
const About = () => {
  
  return (
    <section className='about'>
      <Title title='О программе'> </Title>
      <CardList cardData ={AboutCardData}
                cardComponent={<Card/>}/>


    </section>
  )
}

export default About;