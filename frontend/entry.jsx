import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
// import * as SessionAPIUtil from './util/session_api_util';
//
// window.login = SessionAPIUtil.login;
// window.logout = SessionAPIUtil.logout;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
