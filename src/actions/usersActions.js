export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';

console.log(LOAD_USERS_SUCCESS);

const loadUsersSuccess = (users)=> ({ type: LOAD_USERS_SUCCESS, users: users });

export const loadUsers = ()=> (
    ()=> {}
);
