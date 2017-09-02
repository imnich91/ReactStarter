import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
//import LoginContainer from './Containers/LoginContainer';
import Dashboard from './Containers/Dashboard';
// import AccountsContainer from './Containers/AccountsContainer';
 import RoomContainer from './Containers/RoomContainer';
// import Schedule from './components/Schedule';
 import App from './Containers/App';
// import SingleAccount from './components/AccountsPage/SingleAccount';
// import requireAuth from './Containers/Authentication';
// import {acctData} from './components/AccountsPage/AccountsTable';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="room" component={RoomContainer}/>
  </Route>
)

export default Routes;
