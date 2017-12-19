import {
  UPDATE_MESSAGE
} from '../Actions';

const initialMessage = "Welcome to your react starter kit!"

export const UpdateMessageReducer = (state = initialMessage, action) => {
  switch(action.type) {
    case UPDATE_MESSAGE:
      return action.payload
  }
  return state;
}
