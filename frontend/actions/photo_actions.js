import * as PhotoAPIUtil from "../util/photo_api_util";

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTO_UPDATE_CU = 'RECEIVE_PHOTO_UPDATE_CU';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receivePhotoUpdateCU = photo => ({
  type: RECEIVE_PHOTO_UPDATE_CU,
  photo
});

export const getAllPhotos = () => dispatch => {
  return PhotoAPIUtil.getAllPhotos().then(photos => {
    return dispatch(receivePhotos(photos));
  });
};

export const getPhotosForUser = userId => dispatch => {
  return PhotoAPIUtil.getPhotosForUser(userId).then(photos => {
    return dispatch(receivePhotos(photos));
  });
};

export const getPhoto = photoId => dispatch => {
  return PhotoAPIUtil.getPhoto(photoId).then(photo => {
    return dispatch(receivePhoto(photo));
  });
};

export const uploadPhoto = photoData => dispatch => {
  return PhotoAPIUtil.uploadPhoto(photoData).then(photo => {
    return dispatch(receivePhotoUpdateCU(photo));
  });
};
