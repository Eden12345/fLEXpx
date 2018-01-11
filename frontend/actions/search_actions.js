import * as SearchAPIUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_PHOTOS = 'RECEIVE_SEARCH_PHOTOS';
export const RECEIVE_SEARCH_USERS = 'RECEIVE_SEARCH_USERS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const receiveSearchPhotos = photoArray => ({
  type: RECEIVE_SEARCH_PHOTOS,
  photoArray
});

export const receiveSearchUsers = userArray => ({
  type: RECEIVE_SEARCH_USERS,
  userArray
});

export const clearSearchObject = () => ({
  type: CLEAR_SEARCH
});

export const searchPhotos = (searchText) => dispatch => {
  return SearchAPIUtil.searchPhotos(searchText).then(photoArray => {
    return dispatch(receiveSearchPhotos(photoArray));
  });
};

export const searchUsers = (searchText) => dispatch => {
  return SearchAPIUtil.searchUsers(searchText).then(userArray => {
    return dispatch(receiveSearchUsers(userArray));
  });
};

export const clearSearch = () => dispatch => {
  return dispatch(clearSearchObject());
};
