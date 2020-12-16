import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import './app.css';

import { App } from './app';
// import { App } from './app-redux/index';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
