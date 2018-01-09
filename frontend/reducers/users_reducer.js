import merge from 'lodash/merge';

import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const defaultState = Object.freeze({});

const usersReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, oldState, user);
    case RECEIVE_USERS:
      const users = action.users;
      return merge({}, oldState, users);
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, oldState, { [currentUser.id]: currentUser });
    default:
      return oldState;
  }
};

export default usersReducer;
