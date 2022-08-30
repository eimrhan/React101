import React from 'react';
import ReactDOM from 'react-dom/client';  // web geliştirirken ayrıyeten ekleniyor.
// mobil geliştirme için önemsiz olduğu için dom, core react kütüphanesinden ayrıldı. 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/* <React.StrictMode> */  /* bunu kaldırmazsan componentler geliştirme ortamında hep 2 kez render oluyor. */
      <BrowserRouter>
        <App />
      </BrowserRouter>
/* </React.StrictMode> */ /* ne iş yaradığını araştırmadım. */
); //* root id'li element'e App.js'i inject ediyor. Yani böylelikle index'te App'i görüyoruz.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
