import 'whatwg-fetch';
import 'core-js/es6/promise';
import 'core-js/fn/array/includes';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import charactersApp from './rootReducer';
import App from './components/App';
import '../css/index.css';

const store = createStore(
    charactersApp,
    applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);