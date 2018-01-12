import merge from 'lodash/merge';

import {CHANGE_UPLOAD_MODAL, CHANGE_MAXIMIZATION, CHANGE_LOADING_MODAL} from '../actions/ui_actions';

const defaultState = Object.freeze({
  uploadModalOn: false,
  maximizeOn: false,
  loading: false
});

const uiReducer = (oldState = defaultState, action) => {
  switch(action.type) {
    case CHANGE_UPLOAD_MODAL:
      const uploadModalBoolean = action.uploadModalBoolean;
      return merge({}, oldState, { uploadModalOn: uploadModalBoolean });
    case CHANGE_MAXIMIZATION:
      const maximizeBoolean = action.maximizeBoolean;
      return merge({}, oldState, { maximizeOn: maximizeBoolean });
    case CHANGE_LOADING_MODAL:
      const loadingBoolean = action.loadingBoolean;
      return merge({}, oldState, { loading: loadingBoolean });
    default:
      return oldState;
  }
};

export default uiReducer;
