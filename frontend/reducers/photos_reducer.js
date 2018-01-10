import merge from 'lodash/merge';

import {RECEIVE_PHOTOS, RECEIVE_PHOTO, RECEIVE_PHOTO_UPDATE_CU} from '../actions/photo_actions';

const defaultState = Object.freeze({});

const photosReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      const photos = action.photos;
      return merge({}, oldState, photos);
    case RECEIVE_PHOTO:
      const photo = action.photo;
      return merge({}, oldState, photo);
    case RECEIVE_PHOTO_UPDATE_CU:
      const phot = action.photo;
      return merge({}, oldState, phot);
    default:
      return oldState;
  }
};

export default photosReducer;
