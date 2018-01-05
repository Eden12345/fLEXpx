export const getUser = (userId) => {
  return $.ajax ({
      url: `api/users/${userId}`,
      method: "get"
  });
};
