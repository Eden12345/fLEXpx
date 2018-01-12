import { connect } from 'react-redux';

import { getPhotosForUser, uploadPhoto } from '../../actions/photo_actions';
import { switchUploadModal, switchLoadingModal } from '../../actions/ui_actions';
import UploadPhoto from './upload_photo';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ entities, session, ui }) => ({
  photos: entities.photos,
  currentUser: session.currentUser,
  loading: ui.loading
});

const mapDispatchToProps = dispatch => ({
  switchUploadModal: (uploadModalBoolean) => dispatch(switchUploadModal(uploadModalBoolean)),
  switchLoadingModal: (loadingBoolean) => dispatch(switchLoadingModal(loadingBoolean)),
  getPhotosForUser: (userId) => dispatch(getPhotosForUser(userId)),
  uploadPhoto: (user) => dispatch(uploadPhoto(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadPhoto));
