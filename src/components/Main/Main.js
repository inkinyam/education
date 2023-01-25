import './Main.scss';
import '../Cursor/Cursor.scss';
import AnimatedText from '../AnimatedText/AnimatedText';
import Loader from '../Loader/Loader';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Video from '../Video/Video';
import Vebinar from '../Vebinar/Vebinar';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Accodion from '../Accodion/Accodion';
import Form from '../Form/Form'
import React from 'react';
import api from '../../utils/Api';

const Main = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccesFormPost, setIsSuccesFormPost] = React.useState(false);
  const [isErrorFormPost, setIsErrorFormPost] = React.useState(false);

  const handleSubmitForm = ({surname, name, patronymic, email, phone, organization }) => {
    api.postFormData(surname, name, patronymic, email, phone, organization)
        .then(()=> { 
          setIsSuccesFormPost(true);

          setTimeout(() => {
            setIsSuccesFormPost(false);
          }, 5000);
        })
        .catch((err) => { 
          setIsErrorFormPost(true);

          setTimeout(() => {
            setIsErrorFormPost(false);
          }, 5000);
          console.log(err) });
  }


  return (     
    <>
        <Loader isLoading = {isLoading}/>
        <div className = {isLoading ? 'hide_content': ''}>
         <Layout/>
          <main className = 'main'>
            <About />
            <Video/>
            <Vebinar/>
            <Accodion/>
            
            <div className='main__compose'>
              <div className='main__layout'>
                <div className='main__bg'></div>
              </div>
             
              <FAQ/>
              <AnimatedText  text='Обучающий курс разработан и проводится Институтом Генплана Москвы совместнопс НИУ МГСУ. Выдается диплом о повышении квалификации государственного образца.'/>
              <Form  onSubmit = {handleSubmitForm}
                     isPosted = {isSuccesFormPost}
                     isError  = {isErrorFormPost}
                     setIsPosted = {setIsSuccesFormPost}/>
            </div>

          </main>
          <Footer/>
        </div>
    </>
  )
}

export default Main;