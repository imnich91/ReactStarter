import React from 'react';
import {displayRegistrationModal} from '../Actions';
import { connect } from 'react-redux';
import RegistrationModal from '../components/RegistrationModal';



class Rooms extends React.Component{
  constructor(props){
    super(props);
  }

  renderModal = () => this.props.registrationModalState &&(
    <RegistrationModal data = {this.props.registrationModalState} action = {this.props.displayRegistrationModal}
     date = {this.props.dateState.date}/>
  )

  componentDidUpdate() {

    var htmlElements = "";

    var set = new Set();

    var numberList = document.getElementById("mylist");
    document.getElementById("mylist").innerHTML = "";

    for(var i = 0; i < this.props.rooms.length; i++) {
      if(!set.has(this.props.rooms[i]).RoomType) {
        set.add(this.props.rooms[i])
      }
    }
    for(var item of set) {
      var newListItem = document.createElement("li");
      var listH1 = document.createElement("h1");
      var type = document.createTextNode(item.RoomType);
      var myNewline = document.createElement("br");
      var description = document.createTextNode(item.Description);
      newListItem.setAttribute("class", "col-lg-7 col-md-6 room-col");
      listH1.appendChild(type);
      newListItem.appendChild(listH1);
      newListItem.appendChild(myNewline);
      newListItem.appendChild(description);
      numberList.appendChild(newListItem);

    }
    set.clear()
  }







  render = () => (
    <div className = "Dashboard" id = "RoomsContainer">
      <h1 className = "dashboard-header"> Available Rooms</h1>
      <ul className = "rooms" id = "mylist">

      </ul>
      {this.renderModal()}
    </div>
  )
}

const mapStateToProps = (state) => ({registrationModalState: state.registrationModalState, dateState: state.dateState});

export default connect(mapStateToProps, {displayRegistrationModal})(Rooms);
