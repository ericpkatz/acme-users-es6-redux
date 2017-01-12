import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Users from './components/users/Users';
import User from './components/users/User';


const routes = ()=> (
    <Router history={hashHistory}>
      <Route path='/' component={ Layout }>
        <IndexRoute component={ Home } />
        <Route path='/users' component={ Users } />
        <Route path='/users/:id' component={ User } />
      </Route>
    </Router>
);

export default routes;
