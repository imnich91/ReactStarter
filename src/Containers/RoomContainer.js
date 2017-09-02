import React from 'react';
import { connect } from 'react-redux';
import Rooms from '../components/Rooms';

class RoomContainer extends React.Component{

  constructor(props){
    super(props);
  }

  render = () => (
    <Rooms rooms = {this.props.roomsState}/>
  )
}

const mapStateToProps = (state) => ({roomsState: state.roomsState});

export default connect(mapStateToProps)(RoomContainer);
