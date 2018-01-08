import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { getPhoto } from '../../actions/photo_actions';


const mapStateToProps = ({ session, entities }) => ({
  currentUser: session.currentUser,
  photos: entities.photos
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getPhoto: (photoId) => dispatch(getPhoto(photoId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
