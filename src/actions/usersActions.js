export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
import axios from 'axios';

const loadUsersSuccess = (users)=> ({ type: LOAD_USERS_SUCCESS, users: users });
export const createUserSuccess = (user)=> ({ type: CREATE_USER_SUCCESS, user: user });

export const loadUsers = ()=> dispatch => {
  axios.get('/api/users')
    .then( result=> dispatch(loadUsersSuccess( result.data ))); 
};
