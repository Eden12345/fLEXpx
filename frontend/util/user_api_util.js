export const getUser = (userId) => {
  return $.ajax ({
      url: `api/users/${userId}`,
      method: "get"
  });
};

export const getAllUsers = () => {
  return $.ajax ({
      url: `api/users`,
      method: "get"
  });
};
