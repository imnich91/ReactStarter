import {
  FETCH_ROOMS
} from '../Actions';

const initialAccount = {
  rooms: [0],
  success: false
}

export const RoomsReducer = (state = initialAccount, action) => {
  switch(action.type) {
    case FETCH_ROOMS:
    return action.payload
  }
  return state;
}
