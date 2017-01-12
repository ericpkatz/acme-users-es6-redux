import * as types from '../actions/usersActions';
const reducer = (state=[], action)=> {
  console.log(action);
  switch(action.type){
    case types.LOAD_USERS_SUCCESS:
      state = action.users;
      break;
  }
  return state;
};

export default reducer;
