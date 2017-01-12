import * as types from '../actions/usersActions';
const reducer = (state=[], action)=> {
  console.log(action);
  switch(action.type){
    case types.LOAD_USERS_SUCCESS:
      state = action.users;
      break;
    case types.CREATE_USER_SUCCESS:
      state = [...state, action.user ];
      break;
    case types.DELETE_USER_SUCCESS:
      state = state.filter( user => user.id != action.user.id);
      break;
  }
  return state;
};

export default reducer;
