import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Search from './search';
import { searchUsers, searchPhotos, clearSearch } from '../../actions/search_actions';
import { getPhotosForUser, getPhoto } from '../../actions/photo_actions';
import { getUser } from '../../actions/user_actions';

const mapStateToProps = ({ entities, search }) => ({
  search: search,
  photos: entities.photos,
  users: entities.users
});

const mapDispatchToProps = dispatch => ({
  getPhotosForUser: (userId) => dispatch(getPhotosForUser(userId)),
  getPhoto: (photoId) => dispatch(getPhotosForUser(photoId)),
  getUser: (userId) => dispatch(getUser(userId)),
  searchUsers: (searchText) => dispatch(searchUsers(searchText)),
  searchPhotos: (searchText) => dispatch(searchPhotos(searchText)),
  clearSearch: () => dispatch(clearSearch())

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
