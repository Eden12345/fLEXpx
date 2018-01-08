import { connect } from 'react-redux';

import HomeFeed from './home_feed';
import { getPhotosForUser } from '../../actions/photo_actions';
import { getUser } from '../../actions/user_actions';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: session.currentUser,
  photos: entities.photos,
  users: entities.users
});

const mapDispatchToProps = dispatch => ({
  getPhotosForUser: (userId) => dispatch(getPhotosForUser(userId)),
  getUser: (userId) => dispatch(getUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);
