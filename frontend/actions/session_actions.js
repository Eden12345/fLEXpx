import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS
});

//maybe will need to add .responseJSON to the errors arguments below
//I did need to do that! It's so it goes into an array as a string rather
//than a weird errors object (thanks Thomas)

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then(responseUser => {
    return dispatch(receiveCurrentUser(responseUser));
  }, errors => {
    return dispatch(receiveErrors(errors.responseJSON));
  });
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(responseUser => {
    return dispatch(receiveCurrentUser(responseUser));
  }, errors => {
    return dispatch(receiveErrors(errors.responseJSON));
  });
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(user => {
    return dispatch(receiveCurrentUser(null));
  }, errors => {
    return dispatch(receiveErrors(errors.responseJSON));
  });
};
