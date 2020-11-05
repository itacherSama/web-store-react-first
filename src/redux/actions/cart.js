import actionTypes from './actionTypes';

export const addItem = (objItem) => ({
    type: actionTypes.ADD_PIZZA,
    payload: {
        item: objItem,
    }
});

export const incrementItem = (objItem) => ({
    type: actionTypes.INCREMENT_PIZZA,
    payload: {
        item: objItem,
        operation: '+'
    }
});

export const decrementItem = (objItem) => ({
    type: actionTypes.DECREMENT_PIZZA,
    payload: {
        item: objItem,
        operation: '-'
    }
});

export const deleteItem = (objItem) => ({
    type: actionTypes.DELETE_PIZZA,
    payload: {
        item: objItem
    }
});

export const clearCart = () => ({
    type: actionTypes.CLEAR_CART
});