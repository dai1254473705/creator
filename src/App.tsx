import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Router from './router';

import './static/css/theme.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
