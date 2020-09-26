import axios from 'axios';
import StaticVar from '../Config/StaticVar';

// ===> api create 
const api = axios.create({
  baseURL: StaticVar.URL_API,
  // timeout: 10000,
  headers:{}
});

// ===> api list function request

const cekRequest = () => api.get('/');

export const apis = {
  cekRequest
}

export default apis