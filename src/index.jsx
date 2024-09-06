import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import Rotas from './rotas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);

