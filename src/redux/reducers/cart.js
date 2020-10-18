import actionTypes from "../actions/actionTypes";
import {addItem, findItemIncOrDeс, findTotalItems} from "../../utils/utils";

const initialState = {
    items: [],
    totalPrice: 0,
    totalItems: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PIZZA: {
            const pizza = action.payload;

            let newState = Object.assign(state);
            let needArrayPizzas = newState.items[pizza.id] || [];
            const isFindElement = findItemIncOrDeс(needArrayPizzas, pizza);

            if (!isFindElement) {
                needArrayPizzas = addItem(needArrayPizzas, pizza);
            }

            newState.items = {
                ...newState.items,
                [pizza.id]: [...needArrayPizzas]
            }

            const totalPrice = findTotalItems(newState.items, 'totalPrice');
            const totalItems = findTotalItems(newState.items, 'totalItems');

            return {
                ...newState,
                totalItems,
                totalPrice
            }
        }

        default:
            return state;
    }
}

export default cartReducer;



