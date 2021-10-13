import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';
import { variables, style } from './scss/application.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
