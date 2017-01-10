import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import UsersList from './components/users/UsersList';


const routes = ()=> (
    <Router history={hashHistory}>
      <Route path='/' component={ Layout }>
        <IndexRoute component={ Home } />
        <Route path='/users' component={ UsersList } />
      </Route>
    </Router>
);

export default routes;
