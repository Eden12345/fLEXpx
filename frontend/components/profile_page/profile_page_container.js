import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProfilePage from './profile_page';
import { getUser } from '../../actions/user_actions';
import { getPhoto } from '../../actions/photo_actions';
import { followUser, unFollowUser } from '../../actions/follow_actions';


const mapStateToProps = ({ session, entities }) => ({
  currentUser: session.currentUser,
  photos: entities.photos,
  users: entities.users
});

const mapDispatchToProps = dispatch => ({
  followUser: (userId) => dispatch(followUser(userId)),
  unFollowUser: (userId) => dispatch(unFollowUser(userId)),
  getPhoto: (photoId) => dispatch(getPhoto(photoId)),
  getUser: (userId) => dispatch(getUser(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
