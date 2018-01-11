export const searchPhotos = (searchText) => {
  return $.ajax ({
      url: `api/search/photos/?search_text=${searchText}`,
      method: "get"
  });
};

export const searchUsers = (searchText) => {
  return $.ajax ({
      url: `api/search/users/?search_text=${searchText}`,
      method: "get"
  });
};
