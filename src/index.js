import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/boxicons-2.1.2/css/boxicons.min.css';
import './sass/index.scss';

ReactDOM.render(
  <React.StrictMode basename={process.env.PUBLIC_URL}>
    <App />
  </React.StrictMode>,
document.getElementById('root')
);

