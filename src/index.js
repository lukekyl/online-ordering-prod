import React from 'react';
import ReactDOM from 'react-dom';
import '@hookstate/devtools'
import './styles/App.css';
import Index from './pages/index.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// Hookstate added for managing global state in React hook components
// Dinero will be money display converter, add to App component
// Tailwind CSS for CSS Framework, with CSS Modules or Styled Components for CSS-in-JS Solution
// Formik for forms? Hookstate says it replaces the need

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
