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
    return axios.get(`${mapYandexUrl}?apikey=${apikey}&format=json&geocode=${coords}&sco=latlong`).then((res) => {
      console.log(res.data);
      return res.data;
    });
  },
};

export default Api;
