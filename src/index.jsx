import React from 'react';

// Redux import
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import polymerizeApp from './reducers/polymerizeApp';

// React component impo
import App from './App';

// Style import
import './style/reset.css';
import './style/style.scss';

const store = createStore(polymerizeApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
