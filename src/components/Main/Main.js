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

const Main = () => {
  const [isLoading, setIsLoading] = React.useState(false);


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
            <div className='main__bg'>
              <FAQ/>
              <AnimatedText  text='Обучающий курс разработан и проводится Институтом Генплана Москвы совместно с НИУ МГСУ. Выдается диплом о повышении квалификации государственного образца.'/>
              <Form />
            </div>
          </main>
          <Footer/>
        </div>
    </>
  )
}

export default Main;