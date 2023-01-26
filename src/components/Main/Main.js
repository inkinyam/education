import './Main.scss';
import '../Cursor/Cursor.scss';
import AnimatedText from '../AnimatedText/AnimatedText';
import Loader from '../Loader/Loader';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Video from '../Video/Video';
/* import VideoBlock from '../VideoBlock/VideoBlock'; */
import Vebinar from '../Vebinar/Vebinar';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Accodion from '../Accodion/Accodion';
import Form from '../Form/Form'
import Up from '../Up/Up';
import React from 'react';
import api from '../../utils/Api';

const Main = () => {
  const [isLoading, setIsLoading] = React.useState(false); //лоадер для страницы
  const [isSucces, setIsSucces] = React.useState(false);  // если все прошло удачно, форму очищаем
  const [isSuccesFormPost, setIsSuccesFormPost] = React.useState(false); // для того, чтобы показать сообщение об удачной отправке формы
  const [isErrorFormPost, setIsErrorFormPost] = React.useState(false); //для того, чтобы показать ошибку при отправке формы
  const [isFormPosting, setIsFormPosting] = React.useState(false); //для лоадера загрузки чтобы показать что форма отправляется

  const handleSubmitForm = ({surname, name, patronymic, email, phone, organization }) => {
    setIsFormPosting(true);
    api.postFormData(surname, name, patronymic, email, phone, organization)
        .then(()=> { 
          setIsSuccesFormPost(true);

          setTimeout(() => {
            setIsSuccesFormPost(false);
            setIsSucces(true);
          }, 5000);
        })
        .catch((err) => { 
          setIsErrorFormPost(true);

          setTimeout(() => {
            setIsErrorFormPost(false);
          }, 5000);
          console.log(err) })

        .finally(()=> {
          setIsFormPosting(false);
        })
  }


  return (     
    <>
        <Loader isLoading = {isLoading}/>
        <div className = {isLoading ? 'hide_content': ''}>
         <Layout/>
          <main className = 'main'>
            <About />
            <Video />


            <Vebinar/>
            <Accodion/>
            
            <div className='main__compose'>
              <div className='main__layout'>
                <div className='main__bg'></div>
              </div>
             
              <FAQ/>
              <AnimatedText  text='Обучающий курс разработан и проводится Институтом Генплана Москвы совместно с НИУ МГСУ. Выдается диплом о повышении квалификации государственного образца.'/>
              <Form  onSubmit = {handleSubmitForm}
                     isPosted = {isSuccesFormPost}
                     isError  = {isErrorFormPost}
                     isSucces = {isSucces}
                     isLoading= {isFormPosting}
                     />
            </div>

          </main>
          <Footer/>
        </div>
        <Up />
    </>
  )
}

export default Main;