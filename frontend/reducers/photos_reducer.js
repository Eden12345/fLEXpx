import merge from 'lodash/merge';

import {RECEIVE_PHOTOS} from '../actions/photo_actions';

const defaultState = Object.freeze({});

const photosReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      const photos = action.photos;
      return merge({}, photos);
    default:
      return oldState;
  }
};

export default photosReducer;
