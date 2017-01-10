import React from 'react';
import { connect } from 'react-redux';

const Users = ({ users, foo })=> (
    <div className='well'>
    Users { users.length } { foo }
    </div>
);

const mapStateToProps = ({ users }) => (
    { users, foo: 'bar' }
);
const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;
