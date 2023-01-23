import './Programs.scss';
import Title from '../Title/Title';
import Program from '../Program/Program';

const Programs = ({programCardsData}) => {
  
  return (
  <>
    <section className='programs'>
    <Title title='Программы 2023'></Title>

    <div className='programs__cards'>
          {
            programCardsData.map(item => {
              return (
                <Program key          = {item.id}
                         title        = {item.title}
                         curator      = {item.curator}
                         curatorPhoto = {item.curatorPhoto} 
                         curatorInfo  = {item.curatorInfo} 
                         description  = {item.description} 
                         result       = {item.result} 
                         />
              )
            })
          }
        </div>

    </section>
  </>
  )
}

export default Programs;
