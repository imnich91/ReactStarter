import { combineReducers } from 'redux';
import {RegistrationReducer} from './RegistrationReducer';
import {DateReducer} from './DateReducer';
import {RegReducer} from './RegReducer';
import {RoomsReducer} from './RoomsReducer'


const rootReducer = combineReducers({
  registrationModalState: RegistrationReducer,
  dateState: DateReducer,
  regState: RegReducer,
  roomsState: RoomsReducer
});

export default rootReducer;
