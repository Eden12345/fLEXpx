import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import { switchLoginAnimation } from '../../actions/ui_actions';
import LandingPage from './landing_page';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchLoginAnimation: loginAnimationBoolean => {
      dispatch(switchLoginAnimation(loginAnimationBoolean));
    },
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
