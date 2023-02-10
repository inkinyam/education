import './App.scss';
import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound'

import CursorProvider from '../../Providers/cursorProvider';




function App() {


  return (
    <CursorProvider>
      <div className="App">

      <Routes>
          <Route path = "/"    element={ <Main />} /> 
          <Route path = "/404" status={404} element={ <NotFound /> } />
          <Route path = "*"    element={ <Navigate to="/404" replace />} />
      </Routes>
    </div>

    </CursorProvider>
  );
}

export default App;
