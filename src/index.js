import React from 'react';
import ReactDOM from 'react-dom';
import './styles/layout.css';
import Index from './pages/index.js';
import * as serviceWorker from './serviceWorker';

// Dinero will be money display converter, add to App component
// Tailwind CSS for CSS Framework, with CSS Modules or Styled Components for CSS-in-JS Solution

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
