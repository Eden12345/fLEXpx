import { connect } from 'react-redux';

import { getPhotosForUser, uploadPhoto, clearPhotoErrors } from '../../actions/photo_actions';
import { switchUploadModal, switchLoadingModal } from '../../actions/ui_actions';
import UploadPhoto from './upload_photo';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ entities, session, ui, errors }) => ({
  photos: entities.photos,
  currentUser: session.currentUser,
  loading: ui.loading,
  errors: errors.photo
});

const mapDispatchToProps = dispatch => ({
  switchUploadModal: (uploadModalBoolean) => dispatch(switchUploadModal(uploadModalBoolean)),
  switchLoadingModal: (loadingBoolean) => dispatch(switchLoadingModal(loadingBoolean)),
  getPhotosForUser: (userId) => dispatch(getPhotosForUser(userId)),
  uploadPhoto: (user) => dispatch(uploadPhoto(user)),
  clearPhotoErrors: () => dispatch(clearPhotoErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadPhoto));
