import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'tachyons';
import App from './App';
import About from './About';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <About />
  <App />
  <Footer />
  </React.StrictMode>
);

reportWebVitals();