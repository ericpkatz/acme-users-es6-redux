import React from 'react';
import { Link } from 'react-router';

const Layout = ({ children, router })=> {
  const path = router.location.pathname;
  return (
    <div className='container'>
      <ul className='nav nav-tabs' style={ { marginBottom: '10px' }}>
        <li className={ path === '/' ? 'active' : ''}>
          <Link to='/'>Home</Link>
        </li>
        <li className={ path.indexOf('/users') !== -1 ? 'active' : ''}>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
      { children }
    </div>
  );
};

export default Layout;
