import React from 'react';
import { createRoot, hydrateRoot  } from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

if (container.hasChildNodes()) {
   hydrateRoot(container, <BrowserRouter> <App/> </BrowserRouter>);
} else {
 const root =  createRoot(container);
  root.render(<BrowserRouter> <App/> </BrowserRouter>)
}


reportWebVitals();
