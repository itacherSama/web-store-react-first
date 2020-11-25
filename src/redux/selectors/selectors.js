import { createSelector } from 'reselect';
import { createArrayWithObjsByProperty, getCountItemById } from '@utils/utils';

const getCartItemsSelector = state => state.cartReducer.items;
const getItemByIdSelector = (items, id) => items[id];

export const createItemsForCartSelector = createSelector(
    getCartItemsSelector,
    (_, item) => item,
    createArrayWithObjsByProperty
);

export const getCartItemSelector = createSelector(
    getCartItemsSelector,
    (_, id) => id,
    getItemByIdSelector
);
      
export const getCountItemByIdSelector = () => createSelector(
    getCartItemSelector,
    getCountItemById
);

