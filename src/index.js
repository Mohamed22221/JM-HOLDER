import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlopalStyle from './styles/glopalStyle';
import { BrowserRouter } from "react-router-dom";
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <GlopalStyle/>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

