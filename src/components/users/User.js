import React, { Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { deleteUser } from '../../actions/usersActions';

class User extends React.Component{
  constructor({ router, user, onDelete }){
    super();
    this.user = user;
    this.onDelete = onDelete;
    this.router = router;
  }
  delete(){
    this.onDelete(this.user);
    this.router.push('/users');
  }
  render(){
    if(!this.user)
      return <div/>;
    return (
        <div className='container'>
          <h2>{ this.user.name }</h2>
          <button className='btn btn-danger' onClick={ this.delete.bind(this) }>Remove</button>
        </div>
        
    );
  }
  componentWillReceiveProps(nextProps){
    if(!this.user){
      this.user = nextProps.user;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = _.find(state.users, { id: ownProps.params.id*1 });
  return {
    user
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onDelete: (user)=> dispatch(deleteUser(user))
  };
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
