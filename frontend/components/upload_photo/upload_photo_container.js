import { connect } from 'react-redux';

import { getPhotosForUser, uploadPhoto } from '../../actions/photo_actions';
import { switchUploadModal } from '../../actions/ui_actions';
import UploadPhoto from './upload_photo';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ entities, session }) => ({
  photos: entities.photos,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  switchUploadModal: (userId) => dispatch(switchUploadModal(userId)),
  getPhotosForUser: (userId) => dispatch(getPhotosForUser(userId)),
  uploadPhoto: (user) => dispatch(uploadPhoto(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadPhoto));
