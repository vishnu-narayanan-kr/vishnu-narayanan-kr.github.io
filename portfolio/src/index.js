import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutMe from './AboutMe';
import "./scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutMe />
  </React.StrictMode>
);