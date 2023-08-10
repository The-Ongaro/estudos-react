import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Juros from './pages/juros';
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path = '/' element = {<Juros/>} />
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);


