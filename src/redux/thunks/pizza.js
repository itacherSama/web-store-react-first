import {setPizzas, setLoading} from "../actions/pizza";
import Api from "../../api/api";

export const fetchPizzas =  (sortBy, sortCategory) => async (dispatch) => {
    dispatch(setLoading(true));
    await setTimeout(1000);
    const pizzas = await Api.getPizzas(sortBy, sortCategory);
    dispatch(setPizzas(pizzas));
}

