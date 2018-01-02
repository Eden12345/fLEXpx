import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    processForm: user => dispatch(signup(user)),
    formType: "Signup"
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
