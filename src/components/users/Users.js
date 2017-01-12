import React from 'react';
import { connect } from 'react-redux';

import UsersList from './UsersList';
import CreateUserForm from './CreateUserForm';

const Users = ({ users, foo })=> (
    <div className='container'>
      <CreateUserForm />
      <div className='well'>
      Users { users.length } { foo }
      <UsersList users={ users } />
      </div>
    </div>
);

const mapStateToProps = ({ users }) => (
    { users, foo: 'bar' }
);
const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;
