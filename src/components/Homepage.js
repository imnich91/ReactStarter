import React from 'react';
import {Button} from 'semantic-ui-react';

const Homepage = (props) => (
  <div>
    <h1>{props.messageState}</h1>
    <Button primary onClick = {() => props.updateMessage("Welcome to your react starter kit with redux state management!")}>
      "Press me for redux!"
    </Button>
  </div>
)

export default Homepage;
