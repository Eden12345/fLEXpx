import * as FollowAPIUtil from "../util/follow_api_util";

import {receiveCurrentUser} from "./session_actions";

export const followUser = userId => dispatch => {
  return FollowAPIUtil.followUser(userId).then(responseUser => {
    return dispatch(receiveCurrentUser(responseUser));
  });
};

export const unFollowUser = userId => dispatch => {
  return FollowAPIUtil.unFollowUser(userId).then(responseUser => {
    return dispatch(receiveCurrentUser(responseUser));
  });
};
