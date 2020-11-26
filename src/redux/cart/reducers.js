import actionTypes from './types';
import { performOpItem, findTotalByProps, deleteItem } from '@utils/utils';

const initialState = {
  items: {},
  totalPrice: 0,
  totalItems: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_PIZZA:
    case actionTypes.DECREMENT_PIZZA:
    case actionTypes.ADD_PIZZA: {
      const { item, operation } = action.payload;
      const newItems = performOpItem(state.items[item.id], item, operation);
      const newState = {
        ...state,
        items: {
          ...state.items,
          [item.id]: newItems
        }
      }
      const [totalPrice, totalItems] = findTotalByProps(newState.items, ['totalPrice', 'totalItems']);
      return {
        ...newState,
        totalItems,
        totalPrice
      }
    }
    case actionTypes.DELETE_PIZZA: {
      const { item } = action.payload;

      const newItems = deleteItem(state.items[item.id], item);
      const newState = {
        ...state,
        items: {
          ...state.items,
          [item.id]: newItems
        }
      }

      if (!newItems.length) {
        delete newState.items[item.id];
      }

      const [totalPrice, totalItems] = findTotalByProps(newState.items, ['totalPrice', 'totalItems']);
      return {
        ...newState,
        totalItems,
        totalPrice
      }
    }
    case actionTypes.CLEAR_CART:
      return {
        items: {},
        totalPrice: 0,
        totalItems: 0
      }
    default:
      return state;
  }
}

export default cartReducer;


