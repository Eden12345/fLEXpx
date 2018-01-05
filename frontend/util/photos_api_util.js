export const getPhotosForUser = (userId) => {
  return $.ajax ({
      url: `api/photos/?user_id=${userId}`,
      method: "get"
  });
};
