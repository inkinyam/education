import './About.scss';
import Title from '../Title/Title';
import CardList from '../CardList/CardList';
import SmileyBackground from '../SmileyBackground/SmileyBackground';
import { AboutCardData } from '../../utils/cardInfo';
const About = () => {
  
  return (
    <section className='about'>
      <Title title='Как проходит'> </Title>
      <CardList cardData ={AboutCardData}
                order = {true}/>

      <SmileyBackground />

    </section>
  )
}

export default About;