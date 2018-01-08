export const getPhotosForUser = (userId) => {
  return $.ajax ({
      url: `api/photos/?user_id=${userId}`,
      method: "get"
  });
};

export const getPhoto = (photoId) => {
  return $.ajax ({
      url: `api/photos/${photoId}`,
      method: "get"
  });
};
