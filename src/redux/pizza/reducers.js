import actionTypes from './types';

const initialState = {
  items: [],
  isLoading: false,
};

const pizzaReducer = (state = initialState, action) => {
  const functionsReducer = {
    [actionTypes.SET_PIZZAS]: () => ({
      ...state,
      items: action.payload.items,
      isLoading: action.payload.isLoading,
    }),
    [actionTypes.SET_LOADING]: () => ({
      ...state,
      isLoading: action.payload,
    }),
  };

  const checkProperty = functionsReducer.hasOwnProperty(action.type);

  if (checkProperty) {
    const newState = functionsReducer[action.type]();
    return newState;
  }

  return state;
};

export default pizzaReducer;
