import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WelcomeClass from './Components/WelcomeClass/WelcomeClass';
import WelcomeFunc from './Components/WelcomeFunc/WelcomeFunc';

ReactDOM.render(
  <React.StrictMode>
    <WelcomeFunc/>
    <WelcomeClass/>
  </React.StrictMode>,
  document.getElementById('root')
);