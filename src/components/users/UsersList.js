import React from 'react';

import UserRow from './UserRow';

const UsersList = ({ users})=>(
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
          <th>Id</th>
          <th>Name</th>
          </tr>
        </thead>
        <tbody>
          { users.map( (user)=> <UserRow user={user} key={ user.id } />) }
        </tbody>
      </table>
    </div>
);

export default UsersList;
