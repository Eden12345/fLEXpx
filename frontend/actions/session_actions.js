import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = errors => ({
  type: CLEAR_SESSION_ERRORS
});

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then(responseUser => {
    return dispatch(receiveCurrentUser(responseUser));
  }, errors => {
    return dispatch(receiveSessionErrors(errors.responseJSON));
  });
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(responseUser => {
    return dispatch(receiveCurrentUser(responseUser));
  }, errors => {
    return dispatch(receiveSessionErrors(errors.responseJSON));
  });
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(user => {
    return dispatch(receiveCurrentUser(null));
  }, errors => {
    return dispatch(receiveSessionErrors(errors.responseJSON));
  });
};
