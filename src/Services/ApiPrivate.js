import axios from 'axios';
import StaticVar from '../Config/StaticVar';

// ===> api create 
const api = axios.create({
  baseURL: StaticVar.URL_API,
  // timeout: 10000,
  headers:{},
  // json: true
});

// ===> api interceptors 
api.interceptors.request.use(function (config) {
    // set headers after authentication
    config.headers['x-access-token'] = localStorage.token;
    return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// ===> api list function request

// Merchant
const getUsers = (id) => api.get(`/private/users${id ? '?id='+id : ''}`);
const postUsers = (data) => api.post('/private/users', data);
const putUsers = (id,data) => api.put('/private/users/'+id, data);
const deleteUsers = (id) => api.delete('/private/users/'+id);

export const apis = {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers
}

export default apis