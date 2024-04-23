import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import App from './App';
import App2 from './App2';
import App3 from './Clima/App3';
import Header from './Assets/Header';
import Footer from './Assets/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <App3 />
    <App2 />
    <Footer />
  </React.StrictMode>
);
