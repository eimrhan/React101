import React from 'react';
import ReactDOM from 'react-dom'; //* mobil geliştirme için önemsiz olduğu için dom, core react kütüphanesinden ayrıldı. web geliştirirken ayrıyeten ekleniyor.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  //* root id'li element'e App.js'i inject ediyor. Yani index'te App'i görüyoruz.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
