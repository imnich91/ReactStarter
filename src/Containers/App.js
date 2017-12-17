import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';


const App = () => (
  <div className = "wrapper">
    <Switch>
      <Route exact path = '/' component = {Homepage}/>
    </Switch>
  </div>
);



export default(App);
