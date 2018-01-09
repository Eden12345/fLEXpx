import { connect } from 'react-redux';

import HomeFeed from './home_feed';
import { getPhotosForUser, getAllPhotos } from '../../actions/photo_actions';
import { getUser, getAllUsers } from '../../actions/user_actions';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: session.currentUser,
  photos: entities.photos,
  users: entities.users
});

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
  getAllPhotos: () => dispatch(getAllPhotos()),
  getPhotosForUser: (userId) => dispatch(getPhotosForUser(userId)),
  getUser: (userId) => dispatch(getUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);
