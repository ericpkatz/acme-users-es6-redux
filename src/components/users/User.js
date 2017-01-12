import React, { Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class User extends React.Component{
  constructor({ user }){
    super();
    this.user = user;
  }
  render(){
    if(!this.user)
      return <div/>;
    const content = <div>{this.user.name}</div>;
    return content;
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

const UserContainer = connect(mapStateToProps)(User);

export default UserContainer;
