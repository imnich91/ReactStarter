import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import numberLocalizer from 'react-widgets/lib/localizers/simple-number';
import { connect } from 'react-redux';
import {displayDltAcct} from '../Actions';
import MyCalendar from '../components/MyCalendar';


numberLocalizer();
momentLocalizer(Moment);

const Overview = (children) => (
  <div className = "wrapper">
    <Navbar/>
    <div className="app">
      {children}
      <MyCalendar/>
    </div>
  </div>
);

const App = ({children, authenticated}) => Overview(children)

const mapStateToProps = (state) => ({authenticated: state.authenticated})

export default connect(mapStateToProps)(App);
