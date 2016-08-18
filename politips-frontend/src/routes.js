import React from 'react'
import { Route } from 'react-router'


import Politips from './Politips/Politips';
import Login from './Politips/Auth/Login';
import About from './Politips/About';
import Home from './Politips/Home';
import Legislators from './Politips/Legislators/Legislators';
import LegislatorDetail from './Politips/Legislators/LegislatorDetail';
import Votes from './Politips/Votes/Votes';
import store from './store';


export default (
  <Route path="/" component={Politips}>
    <Route path="/home"  component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/about" component={About}/>
    <Route path="/legislators" component={Legislators}>
      <Route path="/legislators/:id" component={LegislatorDetail} />
    </Route>
    <Route path="/votes" component={Votes}/>
  </Route>
)