import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import LandingPage from './landing_page';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  // return {
  //   loggedIn: Boolean(state.session.currentUser),
  //   errors: state.errors.session
  // };
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
