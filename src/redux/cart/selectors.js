import { createSelector } from 'reselect';
import { createArrayWithObjsByProperty, getCountItemById } from '@utils/utils';

export const getTotalPrice = (state) => state.cartReducer.totalPrice;
export const getTotalItems = (state) => state.cartReducer.totalItems;
export const getItemsSelector = (state) => state.cartReducer.items;
export const getItemByIdSelector = (items, id) => items[id];

export const getItemsForSelector = createSelector(
  getItemsSelector,
  createArrayWithObjsByProperty,
);

export const getItemSelector = createSelector(
  getItemsSelector,
  (_, id) => id,
  getItemByIdSelector,
);

export const getCountItemByIdSelector = createSelector(
  getItemSelector,
  getCountItemById,
);
