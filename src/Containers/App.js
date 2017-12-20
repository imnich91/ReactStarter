import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';



class App extends React.Component {

  render() {

    return (
      <div>
        <div className = "wrapper">
          <HomeContainer/>
        </div>
      </div>
    )
  }
}




export default(App);
