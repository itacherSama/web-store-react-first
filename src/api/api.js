import axios from "axios";

const myUrl = 'http://localhost:3001';

const Api = {
  getPizzas(sortBy, sortCategory) {
    const getSortCategory = sortCategory !== 'all' ? `&category=${sortCategory}` : '';
    return axios.get(`${myUrl}/pizzas?_sort=${sortBy.type}${getSortCategory}&_order=${sortBy.order}`).then((res) => {
      return res.data;
    });
  }
}

export default Api;