import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import icon from '../assets/icon.svg';
import Router from './router';

import './static/css/theme-blue.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
