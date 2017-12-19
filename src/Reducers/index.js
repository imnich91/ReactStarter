import { combineReducers } from 'redux';
import { UpdateMessageReducer } from './UpdateMessageReducer';

const rootReducer = combineReducers({
  messageState : UpdateMessageReducer
});

export default rootReducer;
