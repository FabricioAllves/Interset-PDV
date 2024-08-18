import axios from 'axios';

const Api_orderService = axios.create({
  baseURL: 'http://suporte.zapto.org:8080/PrimeRest/api/v1',
});

const Api_product = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

export { Api_orderService, Api_product };