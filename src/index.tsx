import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './app/store/configureStore';
import App from './app/App';

const APP = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(APP, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
