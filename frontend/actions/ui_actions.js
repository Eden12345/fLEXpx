export const CHANGE_UPLOAD_MODAL = 'CHANGE_UPLOAD_MODAL';

export const changeUploadModal = uploadModalBoolean => ({
  type: CHANGE_UPLOAD_MODAL,
  uploadModalBoolean
});

export const switchUploadModal = (uploadModalBoolean) => dispatch => {
  return dispatch(changeUploadModal(uploadModalBoolean));
};
