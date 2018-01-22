import { connect } from 'react-redux';

import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    processForm: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearSessionErrors: errors => dispatch(clearSessionErrors(errors)),
    formType: "Sign up"
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
