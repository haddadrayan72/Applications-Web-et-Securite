import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import JoinPage from './Pages/JoinPage';
import Boutique from './Pages/Boutique';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/JoinPage" element={<JoinPage />} />
      <Route path="/Boutique" element={<Boutique />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
