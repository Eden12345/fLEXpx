export const followUser = (userId) => {
  return $.ajax ({
    url: "/api/follows",
    method: "post",
    data: {
      followeeId: userId
    }
  });
};

export const unFollowUser = (userId) => {
  return $.ajax ({
    url: `/api/follows/${userId}`,
    method: "delete"
  });
};
