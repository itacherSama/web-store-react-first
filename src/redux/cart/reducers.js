import actionTypes from './types';

import {
  deletePizza, performOperationsOnElement, clearCart, getLocalDataCart,
} from './utils';

const initialState = {
  items: {},
  totalPrice: 0,
  totalItems: 0,
};

const cartReducer = (state = initialState, action) => {
  const functionsReducer = {
    [actionTypes.ADD_PIZZA]: () => performOperationsOnElement(state, action),
    [actionTypes.INCREMENT_PIZZA]: () => performOperationsOnElement(state, action),
    [actionTypes.DECREMENT_PIZZA]: () => performOperationsOnElement(state, action),
    [actionTypes.DELETE_PIZZA]: () => deletePizza(state, action),
    [actionTypes.CLEAR_CART]: () => clearCart(),
    [actionTypes.GET_LOCAL_CART]: () => getLocalDataCart(state, action),

  };
  const checkProperty = functionsReducer.hasOwnProperty(action.type);

  if (checkProperty) {
    const newState = functionsReducer[action.type]();
    return newState;
  }

  return state;
};

export default cartReducer;
