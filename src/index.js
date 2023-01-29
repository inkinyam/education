import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter >
    <App />
  </BrowserRouter>
</React.StrictMode>
);

/*заменить при деплое на нормальный сервер!!!!*/ 

reportWebVitals();
