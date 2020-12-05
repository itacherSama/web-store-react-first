import axios from 'axios';

const myUrl = 'http://localhost:3001';

const mapYandexUrl = 'https://geocode-maps.yandex.ru/1.x';

const apikey = '2e9b2343-d09b-406a-9247-3b015e3b5211';

const Api = {
  getPizzas(sortBy, sortCategory) {
    const getSortCategory = sortCategory !== 'all' ? `&category=${sortCategory}` : '';
    return axios.get(`${myUrl}/pizzas?_sort=${sortBy.type}${getSortCategory}&_order=${sortBy.order}`).then((res) => res.data);
  },

  getDataMap(coords) {
    const queryParamsForData = `apikey=${apikey}&format=json&geocode=${coords}&sco=latlong&kind=house&results=1`;
    return axios.get(`${mapYandexUrl}?${queryParamsForData}`).then((res) => res.data);
  },
};

export default Api;
