import {
  DATE_SELECTED
} from '../Actions'


export const DateReducer = (state = false, action) => {
  switch (action.type) {
    case DATE_SELECTED:
    return action.payload;
  }
  return state;
}
