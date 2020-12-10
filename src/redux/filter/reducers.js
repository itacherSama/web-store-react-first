import actionTypes from './types';
import { setSortBy, setCategory } from './utils';

const initialState = {
  sortBy: {
    type: 'rating',
    order: 'asc',
  },
  sortCategory: 'all',
};

const handlers = {
  [actionTypes.SET_SORT_BY]: (state, action) => setSortBy(state, action),
  [actionTypes.SET_CATEGORY]: (state, action) => setCategory(state, action),
};

const filterReducer = (state = initialState, action) => {
  if (handlers[action.type]) {
    const newState = handlers[action.type](state, action);
    return newState;
  }

  return state;
};

export default filterReducer;
