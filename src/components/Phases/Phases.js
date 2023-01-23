import "./Phases.scss";
import Title from "../Title/Title";
import PhasesCard from "../PhasesCard/PhasesCard";
import Slider from '../Slider/Slider';
import { useInView } from "react-intersection-observer";
import { PhasesData } from '../../utils/cardInfo';

const Phases = ({cardData}) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  
  const cardsClassList = inView? 'phases__cards animated': 'phases__cards';

  return (
    <section className="phases">

      <div className='phases__layout'>
          <div className='phases__bg'></div>
      </div>

      <div className="phases__content">
        <Title title='Этапы подачи заявок и старт программ'> </Title>



        <div ref={ref} className={cardsClassList}>
          <svg  className='phases__svg desktop' viewBox="0 0 1303 192" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 1H1286C1294.84 1 1302 8.16344 1302 17V175C1302 183.837 1294.84 191 1286 191H0" />
          </svg>
          <svg  className='phases__svg tablet' viewBox="0 0 722 412" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M1 1H705C713.837 1 721 8.16344 721 17V189.5C721 198.337 713.837 205.5 705 205.5H17C8.16344 205.5 1 212.663 1 221.5V395C1 403.837 8.16344 411 17 411H721" />
          </svg>
          <svg  className='phases__svg mobile'  viewBox="0 0 329 840" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path  d="M1 1H312C320.837 1 328 8.16344 328 17V151.18C328 160.017 320.837 167.18 312 167.18H17C8.16345 167.18 1 174.344 1 183.18V319.5C1 328.337 8.16344 335.5 17 335.5H312C320.837 335.5 328 342.663 328 351.5V489C328 497.837 320.837 505 312 505H17.3388C8.37106 505 1.15445 512.369 1.34236 521.335L4.1717 656.335C4.35412 665.039 11.4623 672 20.1682 672H312C320.837 672 328 679.163 328 688V823C328 831.837 320.837 839 312 839H1" />
          </svg>

        {
            PhasesData.map(item => {
              return (
                <PhasesCard key         = {item.id}
                            active      = {item.active}
                            title       = {item.title}
                            description = {item.description} />
              )
            })
          }


        </div>
        <Slider autoPlay      = {true}
                autoPlayTime  = {5000}
                width         = {'100%'}
                height        = {'100%'}
                cardData      = {cardData} />
      </div>

    </section>
  )
}

export default Phases;