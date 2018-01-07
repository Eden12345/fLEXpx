import { connect } from 'react-redux';

import { login, clearErrors } from '../../actions/session_actions';
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
    processForm: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    clearErrors: errors => dispatch(clearErrors(errors)),
    formType: "Log in"
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
