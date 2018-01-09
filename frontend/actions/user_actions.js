import * as UserAPIUtil from "../util/user_api_util";
import {receiveCurrentUser} from "./session_actions";

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const getUser = userId => dispatch => {
  return UserAPIUtil.getUser(userId).then(user => {
    return dispatch(receiveUser(user));
  });
};

export const getAllUsers = () => dispatch => {
  return UserAPIUtil.getAllUsers().then(users => {
    return dispatch(receiveUsers(users));
  });
};

export const updateUser = user => dispatch => {
  return UserAPIUtil.updateUser(user).then(updatedUser => {
    return dispatch(receiveCurrentUser(updatedUser));
  });
};
