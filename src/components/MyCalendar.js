import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import RegistrationModal from '../components/RegistrationModal';
import { connect } from 'react-redux';
import {displayRegistrationModal} from '../Actions';
import {setDate} from '../Actions';


var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);


class MyCalendar extends React.Component{

  constructor(props){
    super(props);
  }

  checkDate(date) {
    var myDate = new Date(date);
    this.props.setDate(myDate);
    this.props.displayRegistrationModal(this.props.registrationModalState)
  }



  render = () => (
    <div className = "col-lg-4 col-md-6">
      <div className = "top-margin">
        <h1 className = "calendar-header">Check-in Date</h1>
        <InfiniteCalendar
          width={300}
          height={300}
          selected={today}
          onSelect={(date) => this.checkDate(date)}
          minDate={lastWeek}
        />
      </div>
    </div>
  )

}


const mapStateToProps = (state) => ({registrationModalState: state.registrationModalState, dateState: state.dateState});

export default connect(mapStateToProps, {displayRegistrationModal, setDate})(MyCalendar);
