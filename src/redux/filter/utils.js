export const setSortBy = (state, action) => ({
  ...state,
  sortBy: {
    ...state.sortBy,
    type: action.payload,
  },
});

export const setCategory = (state, action) => ({
  ...state,
  sortCategory: action.payload,
});
