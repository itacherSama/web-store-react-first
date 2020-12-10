import actionTypes from './types';

import {
  deletePizza, performOperationOnElement, clearCart, getLocalDataCart,
} from './utils';

const initialState = {
  items: {},
  totalPrice: 0,
  totalItems: 0,
};

const handlers = {
  [actionTypes.ADD_PIZZA]: (state, action) => performOperationOnElement(state, action),
  [actionTypes.INCREMENT_PIZZA]: (state, action) => performOperationOnElement(state, action),
  [actionTypes.DECREMENT_PIZZA]: (state, action) => performOperationOnElement(state, action),
  [actionTypes.DELETE_PIZZA]: (state, action) => deletePizza(state, action),
  [actionTypes.CLEAR_CART]: () => clearCart(),
  [actionTypes.GET_LOCAL_CART]: (state, action) => getLocalDataCart(state, action),

};

const cartReducer = (state = initialState, action) => {
  if (handlers[action.type]) {
    const newState = handlers[action.type](state, action);
    return newState;
  }

  return state;
};

export default cartReducer;
