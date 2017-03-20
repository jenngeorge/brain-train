import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const signout = () => dispatch => (
  APIUtil.signout().then(user => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const signin = user => dispatch => {

  return(
    APIUtil.signin(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => {
        if (err.responseJSON){
          dispatch(receiveErrors(err.responseJSON));
        } else {
          dispatch(receiveErrors({Unauthorized: [err.responseText]}));
        }
      })
  );
};


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchCurrentUser = () => dispatch => (
  fetch('api/current_user', {credentials: 'same-origin'})
    .then(response => {
      if (response.ok) {
        return response.json().then(
          user => dispatch(receiveCurrentUser(user)));
      } else {
        return response.json().then(
          error => dispatch(receiveErrors(error.message)));
      }
    },
    err => dispatch(receiveErrors(err.responseJSON)))
);
