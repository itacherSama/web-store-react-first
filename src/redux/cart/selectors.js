import { createSelector } from 'reselect';
import { createArrayWithObjsByProperty, getCountItemById } from '@utils/utils';

export const getCartTotalPrice = (state) => state.cartReducer.totalPrice;
export const getCartTotalItems = (state) => state.cartReducer.totalItems;
export const getCartItemsSelector = (state) => state.cartReducer.items;
export const getItemByIdSelector = (items, id) => items[id];

export const getItemsForCartSelector = createSelector(
  getCartItemsSelector,
  createArrayWithObjsByProperty,
);

export const getCartItemSelector = createSelector(
  getCartItemsSelector,
  (_, id) => id,
  getItemByIdSelector,
);

export const getCountItemByIdSelector = createSelector(
  getCartItemSelector,
  getCountItemById,
);
