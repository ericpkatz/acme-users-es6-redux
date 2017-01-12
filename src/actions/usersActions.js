export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
import axios from 'axios';

const loadUsersSuccess = (users)=> ({ type: LOAD_USERS_SUCCESS, users: users });
const createUserSuccess = (user)=> ({ type: CREATE_USER_SUCCESS, user: user });
const deleteUserSuccess = (user)=> ({ type: DELETE_USER_SUCCESS, user: user });

export const loadUsers = ()=> dispatch => {
  axios.get('/api/users')
    .then( result=> dispatch(loadUsersSuccess( result.data ))); 
};

export const createUser = (user)=> dispatch => {
  axios.post('/api/users', user)
    .then( result=> dispatch(createUserSuccess( result.data ))); 
};

export const deleteUser = (user)=> dispatch => {
  axios.delete(`/api/users/${user.id}`)
    .then( result=> dispatch(deleteUserSuccess( user ))); 
};
