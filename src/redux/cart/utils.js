import { performOpItem, findTotalByProps, deleteItem, saveDataInLocalStorage, getDataOutLocalStorage } from '@utils/utils';

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
  saveDataInLocalStorage(newState.items, 'pizzas');

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
  saveDataInLocalStorage(newState.items, 'pizzas');

  return {
    ...newState,
    totalItems,
    totalPrice
  }
}

export const clearCart = () => {
  const newState = {
    items: {},
    totalPrice: 0,
    totalItems: 0
  }
  saveDataInLocalStorage(newState.items, 'pizzas');
  return newState;
}

export const getLocalDataCart = (state, action) => {
  const { key } = action.payload;
  const itemsPizza = getDataOutLocalStorage(key);
  if (itemsPizza) {
    const [totalPrice, totalItems] = findTotalByProps(itemsPizza, ['totalPrice', 'totalItems']);

    const newState = {
      ...state,
      items: itemsPizza,
      totalPrice,
      totalItems
    }
    return newState;
  }
  return state;
}