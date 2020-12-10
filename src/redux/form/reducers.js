import actionTypes from './types';

const initialState = {
  locality: '',
  street: '',
  house: '',
  flat: '',
  porch: '',
  floor: '',
  codeIntercom: '',
};

const formReducer = (state = initialState, action) => {
  const functionsReducer = {
    [actionTypes.SET_DELIVERY]: () => ({
      ...state,
      ...action.payload,
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
