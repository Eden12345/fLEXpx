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

export const updateUser = (user) => {
  return $.ajax ({
      url: `api/users/${user.user.id}`,
      method: "patch",
      data: user
  });
};
