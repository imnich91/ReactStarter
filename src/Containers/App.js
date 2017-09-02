import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import numberLocalizer from 'react-widgets/lib/localizers/simple-number';
import { connect } from 'react-redux';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';


numberLocalizer();
momentLocalizer(Moment);

const App = () => (
  <div className = "wrapper">
    <Navbar/>
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
      </Switch>
  </div>
);



export default(App);
