import actionTypes from './types';
import { setLoading, setPizzas } from './utils';

const initialState = {
  items: [],
  isLoading: false,
};

const handlers = {
  [actionTypes.SET_PIZZAS]: (state, action) => setPizzas(state, action),
  [actionTypes.SET_LOADING]: (state, action) => setLoading(state, action),
};

const pizzaReducer = (state = initialState, action) => {
  if (handlers[action.type]) {
    const newState = handlers[action.type](state, action);
    return newState;
  }

  return state;
};

export default pizzaReducer;
