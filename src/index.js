// Resource
import ReactDOM from 'react-dom';
// Component React
import React from 'react';
import { App } from './App';
//Style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);