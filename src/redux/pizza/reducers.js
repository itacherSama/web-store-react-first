import actionTypes from './types';

const initialState = {
  items: [],
  isLoading: false
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PIZZAS:
      return {
        ...state,
        items: action.payload.items,
        isLoading: action.payload.isLoading
      }
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}

export default pizzaReducer;