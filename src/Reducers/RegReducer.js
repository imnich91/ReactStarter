import {
  SETUP_REG_ONE
} from '../Actions';

const initialAccount = {
  date: "",
  numDays: ""
}

export const RegReducer = (state = initialAccount, action) => {
  switch(action.type) {
    case SETUP_REG_ONE:
    return {...state, ...action.payload}
  }
  return state;
}
