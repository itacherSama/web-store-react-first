import actionTypes from './types';
import { performOpItem, findTotalByProps, deleteItem } from '@utils/utils';

const pizzas = {
  '3': [
    {
      item: {
        id: 3,
        name: 'Кисло-сладкий цыпленок',
        imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
        price: 510,
        size: 40,
        type: 'традиционное'
      },
      totalItems: 1,
      totalPrice: 510
    },
    {
      item: {
        id: 3,
        name: 'Кисло-сладкий цыпленок',
        imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
        price: 375,
        size: 30,
        type: 'традиционное'
      },
      totalItems: 3,
      totalPrice: 1125
    }
  ],
  '5': [
    {
      item: {
        id: 5,
        name: 'Крэйзи пепперони',
        imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
        price: 720,
        size: 30,
        type: 'тонкое'
      },
      totalItems: 3,
      totalPrice: 2160
    }
  ]
};


const initialState = {
  items: { ...pizzas },
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


