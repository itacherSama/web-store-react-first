import actionTypes from './types';

const initialState = {
  sortBy: {
    type: 'rating',
    order: 'asc',
  },
  sortCategory: 'all'
};

const filterReducer = (state = initialState, action) => {

  const functionsReducer = {
    [actionTypes.SET_SORT_BY]: () => {
      return {
        ...state,
        sortBy: {
          ...state.sortBy,
          type: action.payload
        }
      };
    },
    [actionTypes.SET_CATEGORY]: () => {
      return {
        ...state,
        sortCategory: action.payload
      }
    }
  }

  const checkProperty = functionsReducer.hasOwnProperty(action.type);

  if (checkProperty) {
    const newState = functionsReducer[action.type]();
    return newState;
  }

  return state;
}

export default filterReducer;