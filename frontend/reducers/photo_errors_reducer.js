import {RECEIVE_PHOTO_ERRORS,
  CLEAR_PHOTO_ERRORS} from '../actions/photo_actions';

const photoErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    case CLEAR_PHOTO_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default photoErrorsReducer;
