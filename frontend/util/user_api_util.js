
export const fetchUsers = () => {
  return $.ajax({
    method: 'get',
    url: 'api/users'
  });
};


export const fetchUser = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/users/${id}`
  });
};

export const updateUser = (data) => {
  return $.ajax({
    method: 'patch',
    url: `/users`,
    data
  });
};
