import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_PHOTO_UPDATE_CU} from '../actions/photo_actions';

const defaultState = Object.freeze({
  currentUser: null
});

const sessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      //so that currentUser has updated arrays
      return Object.assign({}, oldState, { currentUser });
    case RECEIVE_PHOTO_UPDATE_CU:
      const changeState = merge({}, oldState);
      const id = parseInt(Object.keys(action.photo));
      changeState.currentUser.photoIds.push(id);
      return merge({}, oldState, changeState);
    default:
      return oldState;
  }
};

export default sessionReducer;
