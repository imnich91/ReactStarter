
// export const FETCH_REG_JOBS = 'FETCH_REG_JOBS';
// export const FETCH_STARTED_JOBS = 'FETCH_STARTED_JOBS';
// export const FETCH_SCHEDULED_JOBS = 'FETCH_SCHEDULED_JOBS';
// export const SETUP_ACCT_ONE = 'SETUP_ACCT_ONE';
// export const SETUP_ACCT_TWO = 'SETUP_ACCT_TWO';
export const REGISTRATION_MODAL = 'REGISTRATION_MODAL';
export const FETCH_ROOMS= 'FETCH_ROOMS';
export const DATE_SELECTED = 'DATE_SELECTED';
export const SETUP_REG_ONE = 'SETUP_REG_ONE';




// const api_key = "";
// const api_secret = "";
// const api_fullKey = btoa(':');

export const displayRegistrationModal = (state) => ({
  type: REGISTRATION_MODAL,
  payload: !state
});
//
// const prepareAccountOne = (acct) => {
//   return {
//     acctName: acct.acctName,
//     acctEmail: "",
//     acctNumber: acct.acctNumber,
//     region: acct.region,
//     environment: acct.environment,
//   }
// }
//
// const prepareAccountTwo = (acct) => {
//   return{
//     databaseProduct: acct.databaseProduct,
//     databaseType: acct.databaseType,
//     sqlIP: acct.sqlIP,
//     sqlPort: acct.sqlPort,
//     databaseUsername: acct.databaseUsername,
//     databasePassword: acct.databasePassword
//   }
// }

const prepareRegOne = (reg) => {
  return{
    CheckInDate: reg.date,
    NumDays: reg.numDays
  }
}

const setupRegOne = (reg) => ({
  type: SETUP_REG_ONE,
  payload: prepareRegOne(reg)
})
//
// export const setupAcctOne = (acct) => ({
//   type: SETUP_ACCT_ONE,
//   payload: prepareAccountOne(acct)
// })
//
// export const setupAcctTwo = (acct) => ({
//   type: SETUP_ACCT_TWO,
//   payload: prepareAccountTwo(acct)
// })

const prepareDate = (date) => {
  return{
    date: date
  }
}

export const setDate = (date) => ({
  type: DATE_SELECTED,
  payload: prepareDate(date)
})

export const finishedRequest = (actionType,response) => ({
    type: actionType,
    payload: response
})

export function fetchRooms(date, numDays){
  return function(dispatch){
    return fetch(`http://cssgate.insttech.washington.edu/~iann91/getRooms.php?CheckInDate=` + date + `&NumDays=` + numDays, {

    })
    .then(function(response){
      return response.json()
    })
    .then(function(value){
       dispatch(finishedRequest(FETCH_ROOMS, value))
    })
  }
}
//
// export function fetchRegJobs(){
//   return function(dispatch){
//     return fetch(`http://admin-cluster-restapi-lb-797006272.us-west-2.elb.amazonaws.com/v1/job/?region=us-west-2&status=Registered`,{
//       headers: {
//         Authorization: 'Basic ' + api_fullKey
//       }
//     })
//     .then(function(response){
//       return response.json()
//     })
//     .then(function(value){
//        dispatch(finishedRequest(FETCH_REG_JOBS, value))
//     })
//   }
// }
//
// export function fetchStartedJobs(){
//   return function(dispatch){
//     return fetch(`http://admin-cluster-restapi-lb-797006272.us-west-2.elb.amazonaws.com/v1/job/?region=us-west-2&status=Started`,{
//       headers: {
//         Authorization: 'Basic ' + api_fullKey
//       }
//     })
//     .then(function(response){
//       return response.json()
//     })
//     .then(function(value){
//        dispatch(finishedRequest(FETCH_STARTED_JOBS, value))
//     })
//   }
// }
//
// export function fetchSchedule(){
//   return function(dispatch){
//     return fetch(`http://admin-cluster-restapi-lb-797006272.us-west-2.elb.amazonaws.com/v1/schedule/`,{
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Basic ' + api_fullKey
//       }
//     })
//     .then(function(response){
//       return response.json()
//     })
//     .then(function(value){
//        dispatch(finishedRequest(FETCH_SCHEDULED_JOBS, value))
//     })
//   }
// }

// 'http://cssgate.insttech.washington.edu/~iann91/getRooms.php?'
