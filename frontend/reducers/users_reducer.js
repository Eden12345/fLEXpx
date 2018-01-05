import merge from 'lodash/merge';

import {RECEIVE_USER} from '../actions/user_actions';

const defaultState = Object.freeze({});

const usersReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, user);
    default:
      return oldState;
  }
};

export default usersReducer;
