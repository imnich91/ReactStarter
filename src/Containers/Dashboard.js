import React from 'react';
//import Card from '../components/Card';
// import {fetchAccts} from '../Actions';
// import {fetchRegJobs} from '../Actions';
// import {fetchStartedJobs} from '../Actions';
// import {fetchSchedule} from '../Actions';
import {connect} from 'react-redux';
import Calendar from 'react-bootstrap';
import Slider from 'react-slick';
import MyCarousel from '../components/MyCarousel';
import {displayRegistrationModal} from '../Actions';

import RegistrationModal from '../components/RegistrationModal';

var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
var roomImage1 = "../images/room1.jpg";
var roomImage2 = "../images/room2.jpg";
var roomImage3 = "../images/room3.jpg";

var ammenityImage1 = "../images/pool.jpg";
var ammenityImage2 = "../images/fireplace.jpg";
var ammenityImage3 = "../images/fitness.jpg";

var diningImage1 = "../images/breakfast.jpg";
var diningImage2 = "../images/pantry.jpg";
var diningImage3 = "../images/Cafe.jpg";



class Dashboard  extends React.Component{
  constructor(props) {
    super(props);
  }

  renderModal = () => this.props.registrationModalState &&(
    <RegistrationModal data = {this.props.registrationModalState} action = {this.props.displayRegistrationModal}
     date = {this.props.dateState.date}/>
  )

  render = () => (
    <div>
      <div className = "Dashboard">
        <div className = "row hide-dash">
          <div className = "col-lg-8 col-md-6 scroll">
            <div className = "row">
              <div className = "col-lg-11 col-md-12 col-sm-6 ">
                <MyCarousel
                  FirstPicture = {roomImage1}
                  SecondPicture = {roomImage2}
                  ThirdPicture = {roomImage3} />
              </div>
            </div>
            <div className = "row">
              <div className = "col-lg-11 col-md-12 col-sm-6 ">
                <MyCarousel
                  FirstPicture = {ammenityImage1}
                  SecondPicture = {ammenityImage2}
                  ThirdPicture = {ammenityImage3} />
              </div>
            </div>
            <div className = "row">
              <div className = "col-lg-11 col-md-12 col-sm-6 ">
                <MyCarousel
                  FirstPicture = {diningImage1}
                  SecondPicture = {diningImage2}
                  ThirdPicture = {diningImage3} />
              </div>
            </div>
          </div>
        </div>
        <div>
          {this.renderModal()}
        </div>
      </div>
    </div>
  )

}

//const mapStateToProps = (state) => (/*{accountsInfo: state.accountsInfo, regJobsInfo: state.regJobsInfo, scheduleInfo: state.scheduleInfo}*/);

// export default connect(mapStateToProps,/* {fetchAccts, fetchRegJobs, fetchSchedule}*/)(Dashboard)
const mapStateToProps = (state) => ({registrationModalState: state.registrationModalState, dateState: state.dateState});

export default connect(mapStateToProps, {displayRegistrationModal})(Dashboard);
