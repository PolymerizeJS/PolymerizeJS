import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app'));
