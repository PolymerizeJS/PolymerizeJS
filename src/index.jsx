import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import App from './components/ApolloLayout/App';
// import StringLabApp from './reducers';
import './style/reset.css';
import './style/style.scss';
// let store = createStore(StringLabApp);
// console.log('This is store: ', store);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );

render(
  <App />,
  document.getElementById('app'));
