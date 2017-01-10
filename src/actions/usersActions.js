export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
import axios from 'axios'

console.log(LOAD_USERS_SUCCESS);

const loadUsersSuccess = (users)=> ({ type: LOAD_USERS_SUCCESS, users: users });

export const loadUsers = ()=> dispatch => {
  axios.get('/api/users')
    .then( result=> dispatch(loadUsersSuccess( result.data ))); 
};
