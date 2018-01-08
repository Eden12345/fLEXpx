import { connect } from 'react-redux';

import HomeFeed from './home_feed';
import { getPhotosForUser } from '../../actions/photo_actions';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: session.currentUser,
  photos: entities.photos
});

const mapDispatchToProps = dispatch => ({
  getPhotosForUser: (userId) => dispatch(getPhotosForUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);
