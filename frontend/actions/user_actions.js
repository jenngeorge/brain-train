import * as APIUtil from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";


export const fetchUser = (id) => dispatch => (
  APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
);

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});


export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const updateUser = data => dispatch => (
  APIUtil.updateUser(data).then(user => dispatch(receiveCurrentUser(user)))
);
