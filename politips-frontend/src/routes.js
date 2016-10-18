import React from 'react'
import { Route } from 'react-router'


import Politips from './Politips/Politips';
import Login from './Politips/Auth/Login';
import Home from './Politips/Home';
import store from './store';


export default (
  <Route path="" component={Politips}>
    <Route path="/"      component={Home}/>
    <Route path="/login" component={Login}/>
  </Route>
)
