import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import cartReducer from '@redux/cart';
import filterReducer from '@redux/filter';
import pizzaReducer from '@redux/pizza';
import formReducer from '@redux/form';

const reducers = combineReducers({
  filterReducer,
  pizzaReducer,
  cartReducer,
  formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
