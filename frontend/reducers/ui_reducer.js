import merge from 'lodash/merge';

import {CHANGE_UPLOAD_MODAL} from '../actions/ui_actions';

const defaultState = Object.freeze({
  uploadModalOn: false
});

const uiReducer = (oldState = defaultState, action) => {
  switch(action.type) {
    case CHANGE_UPLOAD_MODAL:
      const uploadModalBoolean = action.uploadModalBoolean;
      return merge({}, oldState, { uploadModalOn: uploadModalBoolean });
    default:
      return oldState;
  }
};

export default uiReducer;
