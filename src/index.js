import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Inset from "./inset";
import Delete from "./er"
import Edit from "./edit"

import Display from './display';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
    <Route path="/edit" element={<Edit />} />
    <Route path="/er" element={<Delete />} />
      <Route path="/inset" element={<Inset />} />
      <Route path="/" element={<Display />} />
    </Routes>
  </Router>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
