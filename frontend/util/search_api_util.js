export const searchPhotos = (searchText) => {
  return $.ajax ({
      url: `api/photos/search/?search_text=${searchText}`,
      method: "get"
  });
};

export const searchUsers = (searchText) => {
  return $.ajax ({
      url: `api/users/search/?search_text=${searchText}`,
      method: "get"
  });
};
