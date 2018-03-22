import merge from 'lodash/merge';

import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
// import {RECEIVE_PHOTO_UPDATE_CU} from '../actions/photo_actions';

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
      if (currentUser === null) {
        return oldState;
      } else {
        //so that currentUser has updated arrays
        return Object.assign({}, oldState, { [currentUser.id]: currentUser });
      }
    // case RECEIVE_PHOTO_UPDATE_CU:
    //   const changeState = merge({}, oldState);
    //   const id = parseInt(Object.keys(action.photo));
    //   const upId = Object.values(action.photo)[0].uploader_id;
    //   changeState[upId].photoIds.push(id);
    //   return merge({}, oldState, changeState);
    default:
      return oldState;
  }
};

export default usersReducer;
