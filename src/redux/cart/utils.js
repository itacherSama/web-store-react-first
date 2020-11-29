import { performOpItem, findTotalByProps, deleteItem } from '@utils/utils';

export const performOperationsOnElement = (state, action) => {
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

export const deletePizza = (state, action) => {
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