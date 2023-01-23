import './Main.scss';
import '../Cursor/Cursor.scss';

import Loader from '../Loader/Loader';

import Layout from '../Layout/Layout';
import About from '../About/About';
import AboutUs from '../AboutUs/AboutUs.js';
import Video from '../Video/Video';
import Phases from '../Phases/Phases';

import SMI from '../SMI/SMI';
import FAQ from '../FAQ/FAQ';
import HowItWas from '../HowItWas/HowItWas';
import Works from '../Works/Works';
import Programs from '../Programs/Programs';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import Up from '../Up/Up';
import React from 'react';
import api from '../../utils/Api';

const Main = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [publicationCards, setPublicationCards] = React.useState([]);
  const [programCards, setProgramCards] = React.useState([]);
  const [isSuccesFormPost, setIsSuccesFormPost] = React.useState(false);

  React.useEffect(() => {
    api.getPublicationData()
   .then((data)=> { 
      setPublicationCards(data);
    })
    .catch((err) => console.log(err)) 
  }, [])

  React.useEffect(() => {
    api.getProgramData()
   .then((data)=> { 
      setProgramCards(data) 
    })
    .catch((err) => console.log(err)) 
  }, [])

  const handleSubmitForm = ({program, name, surname, email, city, institute, speciality, educationLevel, studyYear, portfolioLink }) => {
    api.postFormData(program, name, surname, email, city, institute, speciality, educationLevel, studyYear, portfolioLink)
        .then(()=> { 
          setIsSuccesFormPost(true) 
        })
        .catch((err) => { console.log(err) });
  }

  return (     
    <>
        <Loader isLoading = {isLoading}/>
        <div className = {isLoading ? 'hide_content': ''}>
          <main className = 'main'>
              <Layout/>
              <About />
              <Video/>
              <Phases cardData = {publicationCards}/> 
              <AboutUs isAnimated = {true}
                      isHasButton = {true}
                      text = 'Разрабатываем генеральные планы, проекты планировки, нормативы и градостроительную документацию по всей России. Раз в год проводим стажировку для студентов.'/>
              <SMI SMICardsData = {publicationCards}/>
              <FAQ />     
              <HowItWas/>    
              <AboutUs isAnimated = {true}
                      isHasButton = {false}
                      text = 'Основной темой стажировки и практики в 2022 году станет разработка проектов для Новой Москвы.'/>     
              <Works />
              <Programs programCardsData = {programCards}/>
              <Form programsData = {programCards}
                    onSubmit = {handleSubmitForm}
                    isPosted = {isSuccesFormPost}
                    setIsPosted = {setIsSuccesFormPost}
                   />
          </main>
          <Footer/>
          <Up/>
        </div>
    </>
  )
}

export default Main;