import { connect } from 'react-redux';

import { getPhotosForUser } from '../../actions/photo_actions';
import { getUser } from '../../actions/user_actions';
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ entities, session }) => ({
  photos: entities.photos,
  users: entities.users
});

const mapDispatchToProps = dispatch => ({
  getPhotosForUser: (userId) => dispatch(getPhotosForUser(userId)),
  getUser: (userId) => dispatch(getUser(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoIndex));
