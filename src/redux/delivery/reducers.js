import actionTypes from './types';
import { setDelivery } from './utils';

const initialState = {
  locality: '',
  street: '',
  house: '',
  flat: '',
  porch: '',
  floor: '',
  codeIntercom: '',
};

const handlers = {
  [actionTypes.SET_DELIVERY]: (state, action) => setDelivery(state, action),
};

const formReducer = (state = initialState, action) => {
  if (handlers[action.type]) {
    const newState = handlers[action.type](state, action);
    return newState;
  }

  return state;
};

export default formReducer;
