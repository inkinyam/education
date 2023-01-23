import './Main.scss';
import '../Cursor/Cursor.scss';

import Loader from '../Loader/Loader';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Video from '../Video/Video';
import Vebinar from '../Vebinar/Vebinar';
import Footer from '../Footer/Footer';

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

          </main>
          <Footer/>
        </div>
    </>
  )
}

export default Main;