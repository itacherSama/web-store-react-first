import actionTypes from './types';

const initialState = {
  city: '',
  street: '',
};

const formReducer = (state = initialState, action) => {
  const functionsReducer = {
    [actionTypes.SET_DELIVERY]: () => ({
      ...state,
      city: action.payload.city,
      street: action.payload.street,
    }),
  };

  const checkProperty = functionsReducer.hasOwnProperty(action.type);

  if (checkProperty) {
    const newState = functionsReducer[action.type]();
    return newState;
  }

  return state;
};

export default formReducer;
