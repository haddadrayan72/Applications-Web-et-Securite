import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JoinPage from './Pages/JoinPage';
import Reduction from './Pages/Reduction';
import ProductPage from './Pages/ProductPage';

import Login from './Pages/Login';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Boutique from './Pages/Boutique';


const router = (


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/JoinPage" element={<JoinPage />} />
      <Route path="/ProductPage" element={<ProductPage />} />
      <Route path="/Boutique" element={<Boutique />} />
      <Route path="/Reduction" element={<Reduction />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </BrowserRouter>

);

ReactDOM.render(router, document.getElementById('root'));
