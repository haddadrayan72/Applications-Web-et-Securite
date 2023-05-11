import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JoinPage from './Pages/JoinPage';
import Boutique from './Pages/Boutique';
import Reduction from './Pages/Reduction';
import Login from './Pages/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

const router = (


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/JoinPage" element={<JoinPage />} />
      <Route path="/Boutique" element={<Boutique />} />
      <Route path="/Reduction" element={<Reduction />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </BrowserRouter>

);

ReactDOM.render(router, document.getElementById('root'));
