import merge from 'lodash/merge';

import {RECEIVE_SEARCH_USERS, RECEIVE_SEARCH_PHOTOS, CLEAR_SEARCH} from '../actions/search_actions';

const defaultState = Object.freeze({
  users: [],
  photos: []
});

const searchReducer = (oldState = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_USERS:
      const userArray = action.userArray;
      return merge({}, oldState, { users: userArray });
    case RECEIVE_SEARCH_PHOTOS:
      const photoArray = action.photoArray;
      return merge({}, oldState, { photos: photoArray });
    case CLEAR_SEARCH:
      return defaultState;
    default:
      return oldState;
  }
};

export default searchReducer;
