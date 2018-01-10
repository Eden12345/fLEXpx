import { connect } from 'react-redux';

import { getPhotosForUser } from '../../actions/photo_actions';
import { getUser, updateUser } from '../../actions/user_actions';
import { switchMaximization } from '../../actions/ui_actions';
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ entities, session, ui }) => ({
  maximizeOn: ui.maximizeOn,
  currentUser: session.currentUser,
  photos: entities.photos,
  users: entities.users
});

const mapDispatchToProps = dispatch => ({
  getPhotosForUser: (userId) => dispatch(getPhotosForUser(userId)),
  getUser: (userId) => dispatch(getUser(userId)),
  updateUser: (user) => dispatch(updateUser(user)),
  switchMaximization: (userId) => dispatch(switchMaximization(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoIndex));
