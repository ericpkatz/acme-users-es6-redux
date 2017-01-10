import React from 'react';

const UserRow = ({ user })=> (
    <tr>
      <td>{ user.id }</td>
      <td>{ user.name }</td>
    </tr>
);

export default UserRow;
