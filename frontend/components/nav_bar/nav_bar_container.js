import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { getPhoto } from '../../actions/photo_actions';
import { switchUploadModal } from '../../actions/ui_actions';


const mapStateToProps = ({ session, entities, ui }) => ({
  currentUser: session.currentUser,
  photos: entities.photos,
  uploadModalOn: ui.uploadModalOn,
  maximizeOn: ui.maximizeOn
});

const mapDispatchToProps = dispatch => ({
  switchUploadModal: (uploadModalBoolean) => dispatch(switchUploadModal(uploadModalBoolean)),
  logout: () => dispatch(logout()),
  getPhoto: (photoId) => dispatch(getPhoto(photoId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
