import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { createStore, applyMiddleware } from 'redux';
import { loadState, saveState } from './helpers/localStorage';
import bikesApp from './redux'
import App from './App';
import './index.css';

const persistedState = loadState();
const store = createStore(bikesApp, persistedState, applyMiddleware(thunk))

store.subscribe(throttle(() => {
  saveState({
    sortOrder: store.getState().sortOrder,
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
