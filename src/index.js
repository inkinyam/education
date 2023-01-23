import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter >
    <App />
  </HashRouter>
</React.StrictMode>
);

/*заменить при деплое на нормальный сервер!!!!*/ 

reportWebVitals();
