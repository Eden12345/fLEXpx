import { connect } from 'react-redux';

import { getPhotosForUser } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ entities, session }) => {
  return { photos: entities.photos };
};

const mapDispatchToProps = dispatch => ({
  getPhotosForUser: (userId) => dispatch(getPhotosForUser(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoIndex));
