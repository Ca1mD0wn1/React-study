import React from 'react';
import ReactDOM from 'react-dom/client';
// import store from './14_redux_react-redux/store';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
// import App from './14_redux_react-redux/App'
// import store from './14_redux_react-redux/store'
// import App from './15_redux_react_redux_combine/App'
// import store from './15_redux_react_redux_combine/store/index';
// import store from './17_redux_react-redux_redux-saga_combine/store/index';

// import App from './17_redux_react-redux_redux-saga_combine/App'

import App from './router-params/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)


