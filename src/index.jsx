import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Component
import App from './App';

// Reducer
import PolymerizeApp from './reducer';

// Style import
import './style/reset.css';
import './style/style.scss';

const store = createStore(PolymerizeApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
