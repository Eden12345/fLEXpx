import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import { getPhotosForUser } from './actions/photo_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //testing
  // window.dispatch = store.dispatch;
  // window.getState = store.getState;
  // window.getPhotosForUser = getPhotosForUser;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
