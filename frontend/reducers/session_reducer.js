import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null
});

const sessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, oldState, { currentUser });
    default:
      return oldState;
  }
};

export default sessionReducer;
