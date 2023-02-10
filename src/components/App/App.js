import './App.scss';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound'

import CursorProvider from '../../Providers/cursorProvider';




function App() {


  return (
    <CursorProvider>
      <div className="App">

      <Routes>
        <Route path = "*" element={<NotFound />} />
        <Route path = "/" element={<Main />} /> 
      </Routes>
      </div>

    </CursorProvider>
  );
}

export default App;
