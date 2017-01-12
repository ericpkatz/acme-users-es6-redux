import React from 'react';
import { Link } from 'react-router';

const UserRow = ({ user })=> (
    <tr>
      <td>{ user.id }</td>
      <td>
        <Link to={`/users/${user.id}`}>
          { user.name }
        </Link>
      </td>
    </tr>
);

export default UserRow;
