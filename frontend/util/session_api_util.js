
export const signout = () => {
  return $.ajax({
    method: 'delete',
    url: '/users/sign_out'
  });
};

export const signin = (user) => {
  return $.ajax({
    method: 'post',
    url: '/users/sign_in',
    data: user
  });
};

export const signup = (user) => {
  return $.ajax({
    method: 'post',
    url: '/users',
    data: user
  });
};
