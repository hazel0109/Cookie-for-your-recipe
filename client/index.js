import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import styles from './scss/application.scss';

render(
  // <Provider>
  <App />,
  /* </Provider>, */
  document.getElementById('root')
);
