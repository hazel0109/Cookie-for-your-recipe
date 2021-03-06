import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.jsx';
import store from './store';
import './scss/application.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
