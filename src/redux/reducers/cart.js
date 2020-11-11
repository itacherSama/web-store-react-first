import actionTypes from "../actions/actionTypes";
import {performOpItem, findTotalByProps, deleteItem} from "../../utils/utils";

const pizzaaaa = {
    0: [
      {
        item: {
          id: 0,
          name: 'Пепперони Фреш с перцем',
          imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
          price: 1200,
          size: 40,
          type: 'тонкое'
        },
        totalItems: 3,
        totalPrice: 3600
      }
    ],
    2: [
      {
        item: {
          id: 2,
          name: 'Цыпленок барбекю',
          imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
          price: 295,
          size: 26,
          type: 'тонкое'
        },
        totalItems: 4,
        totalPrice: 1180
      }
    ],
    3: [
      {
        item: {
          id: 3,
          name: 'Кисло-сладкий цыпленок',
          imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
          price: 275,
          size: 26,
          type: 'традиционное'
        },
        totalItems: 4,
        totalPrice: 1100
      },
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
      }
    ],
    5: [
      {
        item: {
          id: 5,
          name: 'Крэйзи пепперони',
          imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
          price: 900,
          size: 40,
          type: 'тонкое'
        },
        totalItems: 3,
        totalPrice: 2700
      },
      {
        item: {
          id: 5,
          name: 'Крэйзи пепперони',
          imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
          price: 720,
          size: 30,
          type: 'тонкое'
        },
        totalItems: 1,
        totalPrice: 720
      }
    ],
    6: [
      {
        item: {
          id: 6,
          name: 'Пепперони',
          imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg',
          price: 675,
          size: 26,
          type: 'тонкое'
        },
        totalItems: 1,
        totalPrice: 675
      }
    ]
};

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
            const {item, operation} = action.payload;
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
            const {item} = action.payload;

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


