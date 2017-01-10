import React from 'react';
import { connect } from 'react-redux';

import UsersList from './UsersList';

const Users = ({ users, foo })=> (
    <div className='well'>
    Users { users.length } { foo }
    <UsersList users={ users } />
    </div>
);

const mapStateToProps = ({ users }) => (
    { users, foo: 'bar' }
);
const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;
