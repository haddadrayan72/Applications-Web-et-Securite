import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import JoinPage from './Pages/JoinPage';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/JoinPage" element={<JoinPage />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
