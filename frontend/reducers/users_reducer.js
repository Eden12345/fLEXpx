import merge from 'lodash/merge';

import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';

const defaultState = Object.freeze({});

const usersReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, user);
    case RECEIVE_USERS:
      const users = action.users;
      return merge({}, users);
    default:
      return oldState;
  }
};

export default usersReducer;
