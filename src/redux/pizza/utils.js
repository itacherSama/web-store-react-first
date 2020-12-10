export const setPizzas = (state, action) => ({
  ...state,
  items: action.payload.items,
  isLoading: action.payload.isLoading,
});

export const setLoading = (state, action) => ({
  ...state,
  isLoading: action.payload,
});
