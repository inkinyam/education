/*import React from 'react';
import { createRoot, hydrateRoot} from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

 const container = document.getElementById('root');

if (container.hasChildNodes()) {
   const prerenderoot = hydrateRoot(container, React.reactNode);
   prerenderoot.render(<React.StrictMode><HashRouter> <App/> </HashRouter></React.StrictMode>)
   
} else {
 const root =  createRoot(container);
  root.render(<React.StrictMode><HashRouter> <App/> </HashRouter></React.StrictMode>)
}
 */



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
