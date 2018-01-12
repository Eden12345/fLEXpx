export const CHANGE_UPLOAD_MODAL = 'CHANGE_UPLOAD_MODAL';
export const CHANGE_MAXIMIZATION = 'CHANGE_MAXIMIZATION';
export const CHANGE_LOADING_MODAL = 'CHANGE_LOADING_MODAL';

export const changeUploadModal = uploadModalBoolean => ({
  type: CHANGE_UPLOAD_MODAL,
  uploadModalBoolean
});

export const changeMaximization = maximizeBoolean => ({
  type: CHANGE_MAXIMIZATION,
  maximizeBoolean
});

export const changeLoadingModal = loadingBoolean => ({
  type: CHANGE_LOADING_MODAL,
  loadingBoolean
});

export const switchUploadModal = (uploadModalBoolean) => dispatch => {
  return dispatch(changeUploadModal(uploadModalBoolean));
};

export const switchMaximization = (maximizeBoolean) => dispatch => {
  return dispatch(changeMaximization(maximizeBoolean));
};

export const switchLoadingModal = (loadingBoolean) => dispatch => {
  return dispatch(changeLoadingModal(loadingBoolean));
};
