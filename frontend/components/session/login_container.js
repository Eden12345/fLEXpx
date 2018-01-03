import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    processForm: user => dispatch(login(user)),
    formType: "Log in"
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
