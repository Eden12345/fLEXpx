import { connect } from 'react-redux';
import HomeFeed from './home_feed';

// import { logout } from '../../actions/session_actions';
// import NavBar from './nav_bar';

// const mapStateToProps = ({ session }) => ({
//   currentUser: session.currentUser
// });
//
// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

export default connect()(HomeFeed);
