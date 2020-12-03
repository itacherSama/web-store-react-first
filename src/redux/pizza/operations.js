import Api from '@api';
import * as actions from './actions';

export const fetchPizzas = (sortBy, sortCategory) => async (dispatch) => {
  dispatch(actions.setLoading(true));
  await setTimeout(1000);
  const pizzas = await Api.getPizzas(sortBy, sortCategory);
  dispatch(actions.setPizzas(pizzas));
};
