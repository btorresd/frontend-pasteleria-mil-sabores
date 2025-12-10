import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';
import '../src/index.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. ENVOLVER LA APLICACIÓN CON EL BROWSER ROUTER */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);