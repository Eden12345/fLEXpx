import { connect } from 'react-redux';

import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: errors => dispatch(clearErrors(errors)),
    formType: "Sign up"
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
