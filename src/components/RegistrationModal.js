import React from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {HelpBlock} from 'react-bootstrap';
import {InputGroup}from 'react-bootstrap';
import {fetchRooms} from '../Actions';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';


const state = {
  numDays:"",
  numPeople:"",
  date:""
}

class RegistrationModal extends React.Component{

  constructor(props){
    super(props);
  }

  getMonth = (props) => (
    state.date = props.date.getFullYear() + "-" + (props.date.getMonth() + 1) + "-" +  props.date.getDate()
  )

  handleChange(event) {
    switch(event.target.name) {
      case "days":
        state.numDays = event.target.value,
        console.log(state.numDays)
        break
      case "people":
        state.numPeople = event.target.value,
        console.log(event.target.value)
        break
      default:
        console.log(event.target.name)
        break
    }

  }

  handleSubmit(event) {
    this.props.fetchRooms(state.date, state.numDays),
    this.props.action(this.props.data),
    browserHistory.push("/room")

  }


  render = () => (
      <div className = "modal-container">
        <Modal
          show={this.props.data}
          container={this}
          aria-labelledby="contained-modal-title"

        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Check Availibility</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit = {this.handleSubmit}>
            <FormGroup
              controlId="formBasicText"
              // validationState={()}
            >
              <div className = "row">
                <div className = "col-lg-6">
                  <ControlLabel>Check-in Date</ControlLabel>
                  <FormControl.Static>
                    {this.getMonth(this.props)}
                  </FormControl.Static>
                </div>
                <div className = "col-lg-6">
                  <FormGroup>
                    <label>Length of stay</label>
                    <FormControl name = "days" type="text" placeholder = "# of days" onChange = {this.handleChange}/>
                  </FormGroup>
                </div>
              </div>
              <div className = "row">
                <div className = "col-lg-6">
                  <FormGroup>
                    <label>Number of people</label>
                    <FormControl name = "people" type="text" placeholder = "# of people" onChange = {this.handleChange}/>
                  </FormGroup>
                </div>
              </div>
              <FormControl.Feedback />
            </FormGroup>
            <Button onClick={() => this.handleSubmit()}  className = "btn-primary">
              Submit
            </Button>
            <Button onClick={() => this.props.action(this.props.data)}>Close</Button>
          </form>
          </Modal.Body>
        </Modal>
      </div>
  )
}


const mapStateToProps = (state) => ({regState: state.regState, roomsState: state.roomsState});

export default connect(mapStateToProps, {fetchRooms})(RegistrationModal);
