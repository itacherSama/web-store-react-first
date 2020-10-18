import actionTypes from './actionTypes';

export const setPizzas = (items) => ({
    type: actionTypes.SET_PIZZAS,
    payload: {
        items,
        isLoading: false
    }
});

export const setLoading = (val) => ({
    type: actionTypes.SET_LOADING,
    payload: val
})