import React from 'react';
import Homepage from '../components/Homepage';
import { connect } from 'react-redux';
import {updateMessage} from '../Actions';

const HomeContainer = (props) => (
  <Homepage updateMessage = {props.updateMessage} messageState = {props.messageState}/>
)

const mapStateToProps = (state) => ({messageState : state.messageState})
export default connect(mapStateToProps, {updateMessage})(HomeContainer);
