import './HowItWas.scss';
import Title from '../Title/Title';
import { Player, ControlBar, BigPlayButton, LoadingSpinner  } from 'video-react';
import { useInView } from "react-intersection-observer";
import poster from '../../images/videoCover2.jpg';

const HowItWas = ()=>{
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const statCardClassList = inView? 'howItWas__statCard animated': 'howItWas__statCard';


  return (
    <section className='howItWas'>
      <div className='howItWas__layout'>
        <div className='howItWas__bg'></div>
      </div>


      <div className='howItWas__container'>
        <Title title = 'Стажировка 2022'/>
        <Player
          playsInline
          poster      = {poster}
          src         = ""
          fluid       = {true}
          muted       = {true}
          aspectRatio = "auto"
          autoPlay    = {false} >
          <ControlBar autoHide = {true}/>
          <BigPlayButton position = {'center'} className = {'howItWas__playerbutton'}/>
          <LoadingSpinner />
        </Player> 

        <div className='howItWas__statistic'>
          <div ref={ref} className={statCardClassList}>
            <h4 className='howItWas__statTitle'>200 заявок</h4>
            <p className='howItWas__statText'>подали студенты за период отбора</p>
          </div>

          <div ref={ref} className={statCardClassList}>
            <h4 className='howItWas__statTitle'>32 студента</h4>
            <p className='howItWas__statText'>прошли отбор по конкурсу портфолио</p>
          </div>

          <div ref={ref} className={statCardClassList}>
            <h4 className='howItWas__statTitle'>3 участника</h4>
            <p className='howItWas__statText'>программ теперь работают в Институте</p>
          </div>
        </div>
      </div>


      
      

    </section>
  )
}

export default HowItWas;