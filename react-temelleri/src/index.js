import React from 'react';
import ReactDOM from 'react-dom/client';  // web geliştirirken ayrıyeten ekleniyor.
// mobil geliştirme için önemsiz olduğu için dom, core react kütüphanesinden ayrıldı. 
import reportWebVitals from './reportWebVitals';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'
import './index.css';
import './App.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/11.Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/* <React.StrictMode> */  /* bunu kaldırmazsan componentler geliştirme ortamında hep 2 kez render oluyor. */
      <Provider store={store}>  {/* Redux kullanırken App'imizi Provider ile sarmalayıp store dosyasını gönderiyoruz. */}
        <BrowserRouter>       {/* Routing işlemleri için App'imizi <BrowserRouter> ile sarmalamamız gerek. */}
          <App />
        </BrowserRouter>
      </Provider>
/* </React.StrictMode> */ /* ne iş yaradığını araştırmadım. */
); //* root id'li element'e App.js'i inject ediyor. Yani böylelikle index'te App'i görüyoruz.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
