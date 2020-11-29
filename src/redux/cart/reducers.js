import actionTypes from './types';

import { deletePizza, performOperationsOnElement } from './utils';

const initialState = {
  items: {},
  totalPrice: 0,
  totalItems: 0
};

const cartReducer = (state = initialState, action) => {
  const functionsReducer = {
    [actionTypes.ADD_PIZZA]: () => performOperationsOnElement(state, action),
    [actionTypes.INCREMENT_PIZZA]: () => performOperationsOnElement(state, action),
    [actionTypes.DECREMENT_PIZZA]: () => performOperationsOnElement(state, action),
    [actionTypes.DELETE_PIZZA]: () => deletePizza(state, action),
    [actionTypes.CLEAR_CART]: () => {
      return {
        items: {},
        totalPrice: 0,
        totalItems: 0
      }
    }

  }
  const checkProperty = functionsReducer.hasOwnProperty(action.type);

  if (checkProperty) {
    const newState = functionsReducer[action.type]();
    return newState;
  }

  return state;
}

export default cartReducer;



// for tests 
// const pizzas = {
//   '3': [
//     {
//       item: {
//         id: 3,
//         name: 'Кисло-сладкий цыпленок',
//         imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
//         price: 510,
//         size: 40,
//         type: 'традиционное'
//       },
//       totalItems: 1,
//       totalPrice: 510
//     },
//     {
//       item: {
//         id: 3,
//         name: 'Кисло-сладкий цыпленок',
//         imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
//         price: 375,
//         size: 30,
//         type: 'традиционное'
//       },
//       totalItems: 3,
//       totalPrice: 1125
//     }
//   ],
//   '5': [
//     {
//       item: {
//         id: 5,
//         name: 'Крэйзи пепперони',
//         imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
//         price: 720,
//         size: 30,
//         type: 'тонкое'
//       },
//       totalItems: 3,
//       totalPrice: 2160
//     }
//   ]
// };
