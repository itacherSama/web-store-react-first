import actionTypes from './actionTypes';

export const addPizza = (objPizza) => ({
    type: actionTypes.ADD_PIZZA,
    payload: objPizza
});

export const clearCart = () => ({
    type: actionTypes.CLEAR_CART
});