import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RGSchoolApp from './app/RGSchoolApp.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <RGSchoolApp />
    </BrowserRouter>  
  </React.StrictMode>,
)
