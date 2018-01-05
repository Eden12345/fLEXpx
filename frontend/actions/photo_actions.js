import * as PhotoAPIUtil from "../util/photo_api_util";

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const getPhotosForUser = userId => dispatch => {
  return PhotoAPIUtil.getPhotosForUser(userId).then(photos => {
    return dispatch(receivePhotos(photos));
  });
};
