import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';




class App extends React.Component {


  render() {
    
    return (
      <div>
        <Navbar/>
        <div className = "wrapper">
          <Homepage/>
        </div>
      </div>
    )
  }
}




export default(App);
