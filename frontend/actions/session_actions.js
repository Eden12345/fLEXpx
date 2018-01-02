import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

//maybe will need to add .responseJSON to the errors arguments below

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then(responseUser => {
    return dispatch(receiveCurrentUser(responseUser));
  }, errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(responseUser => {
    return dispatch(receiveCurrentUser(responseUser));
  }, err => {
    return dispatch(receiveErrors(errors));
  });
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(user => {
    return dispatch(receiveCurrentUser(null));
  }, err => {
    return dispatch(receiveErrors(errors));
  });
};
