import {
  REGISTRATION_MODAL
} from '../Actions';

export const RegistrationReducer= (state = false, action) => {
  switch (action.type) {
    case REGISTRATION_MODAL:
    return action.payload;
  }
  return state;
};
