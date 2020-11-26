import actionTypes from './types';
import * as actions from './actions';
import Api from '@api';

export const fetchPizzas = (sortBy, sortCategory) => async (dispatch) => {
  dispatch(actions.setLoading(true));
  await setTimeout(1000);
  const pizzas = await Api.getPizzas(sortBy, sortCategory);
  dispatch(actions.setPizzas(pizzas));
}
