import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  debugger
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    processForm: user => dispatch(login(user)),
    formType: "Login"
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);