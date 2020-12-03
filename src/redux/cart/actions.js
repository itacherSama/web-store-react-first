import actionTypes from './types';

export const addItem = (objPizza) => ({
  type: actionTypes.ADD_PIZZA,
  payload: {
    item: objPizza,
    operation: '+',
  },
});

export const incrementItem = (objPizza) => ({
  type: actionTypes.INCREMENT_PIZZA,
  payload: {
    item: objPizza,
    operation: '+',
  },
});

export const decrementItem = (objPizza) => ({
  type: actionTypes.DECREMENT_PIZZA,
  payload: {
    item: objPizza,
    operation: '-',
  },
});

export const deleteItem = (objPizza) => ({
  type: actionTypes.DELETE_PIZZA,
  payload: {
    item: objPizza,
  },
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART,
});

export const getLocalDataCart = (key) => ({
  type: actionTypes.GET_LOCAL_CART,
  payload: {
    key,
  },
});
