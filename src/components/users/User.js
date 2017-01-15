import React, { Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { deleteUser } from '../../actions/usersActions';

const UserDetail = ({ user, onDelete })=> (
  <div className='container'>
    <h2>{ user.name }</h2>
    <button className='btn btn-danger' onClick={ onDelete }>Remove</button>
  </div>
);

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
    //TODO - use a presentation component
    //<UserDetail user={ this.user } onDelete={this.onDelete} router={this.router} />
    if(!this.user)
      return <div/>;
    return (
        <UserDetail user={ this.user } onDelete={this.delete.bind(this) } />
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
