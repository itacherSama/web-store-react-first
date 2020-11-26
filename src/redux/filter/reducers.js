import actionTypes from './types';

const initialState = {
  sortBy: {
    type: 'rating',
    order: 'asc',
  },
  sortCategory: 'all'
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: {
          ...state.sortBy,
          type: action.payload
        }
      }
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        sortCategory: action.payload
      }
    default:
      return state;
  }
}

export default filterReducer;