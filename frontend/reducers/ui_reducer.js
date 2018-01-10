import merge from 'lodash/merge';

import {CHANGE_UPLOAD_MODAL, CHANGE_MAXIMIZATION} from '../actions/ui_actions';

const defaultState = Object.freeze({
  uploadModalOn: false,
  maximizeOn: false
});

const uiReducer = (oldState = defaultState, action) => {
  switch(action.type) {
    case CHANGE_UPLOAD_MODAL:
      const uploadModalBoolean = action.uploadModalBoolean;
      return merge({}, oldState, { uploadModalOn: uploadModalBoolean });
    case CHANGE_MAXIMIZATION:
      const maximizeBoolean = action.maximizeBoolean;
      return merge({}, oldState, { maximizeOn: maximizeBoolean });
    default:
      return oldState;
  }
};

export default uiReducer;
