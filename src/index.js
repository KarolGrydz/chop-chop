import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextController } from './context';

ReactDOM.render(
  <ContextController>
    <App />
  </ContextController>,
  document.getElementById('root')
);
