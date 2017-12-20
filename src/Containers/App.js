import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer';




class App extends React.Component {

  getName() {
    if (typeof process.env.PUBLIC_URL !== 'undefined') {
      return process.env.PUBLIC_URL +  "/"
    } else {
      return "/"
    }
  }

  render() {

    return (
      <div>
        <div className = "wrapper">
          <Switch>
            {console.log(process.env.PUBLIC_URL)}
            <Route exact path = {this.getName()} component = {HomeContainer}/>
          </Switch>
        </div>
      </div>
    )
  }
}




export default(App);
