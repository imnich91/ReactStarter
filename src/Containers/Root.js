import React from 'react';
import { Router, browserHistory } from 'react-router';
import Routes from '../Routes';

const Root = () => (
  <Router history={browserHistory}>{Routes}</Router>
)

export default Root;
