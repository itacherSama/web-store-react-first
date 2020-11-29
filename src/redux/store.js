import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import cartReducer from '@redux/cart';
import filterReducer from '@redux/filter';
import pizzaReducer from '@redux/pizza';


let reducers = combineReducers({
  filterReducer: filterReducer,
  pizzaReducer: pizzaReducer,
  cartReducer: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;