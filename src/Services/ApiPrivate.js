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
    config.headers['AuthToken'] = localStorage.token;
    return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// ===> api list function request

// Merchant
const getMerchant = (id) => api.get(`/order/merchant${id ? '?id='+id : ''}`);
const postMerchant = (data) => api.post('/order/merchant/register', data);
const putMerchant = (id,data) => api.put('/order/merchant/'+id, data);
const deleteMerchant = (id) => api.delete('/order/merchant/'+id);

// Merchant Product Menu
const postProductMerchant = (id,data) => api.post('/order/merchant/product/add/'+id, data);
const putProductMerchant = (id,productId,data) => api.put('/order/merchant/product/update/'+id+'/'+productId, data);
const deleteProductMerchant = (id,productId) => api.delete('/order/merchant/product/delete/'+id+'/'+productId);

// Merchant
const getDriver = (id) => api.get(`/driver/profile${id ? '?id='+id : ''}`);
const postDriver = (data) => api.post('/driver/profile/register', data);
const putDriver = (id,data) => api.put('/driver/profile/'+id, data);
const deleteDriver = (id) => api.delete('/driver/profile/'+id);

const uploadPhotoDriver = (data) => api.post('/driver/profile/uploadphoto',data);
const uploadIdentityDriver = (data) => api.post('/driver/profile/uploadidentitycard',data);
const uploadLicenseDriver = (data) => api.post('/driver/profile/uploadlicensedriving',data);
const uploadPoliceCertificateDriver = (data) => api.post('/driver/profile/uploadpolicecertificate',data);

const getPhotoDriver = (data) => api.get('/driver/repo/photo/'+data);
const getIdentityDriver = (data) => api.get('/driver/repo/identitycard/'+data);
const getLicenseDriver = (data) => api.get('/driver/repo/licensedriving/'+data);
const getPoliceCertificateDriver = (data) => api.get('/driver/repo/policecertificate/'+data);

export const apis = {
  getMerchant,
  postMerchant,
  putMerchant,
  deleteMerchant,
  getDriver,
  postDriver,
  putDriver,
  deleteDriver,
  uploadPhotoDriver,
  uploadIdentityDriver,
  uploadLicenseDriver,
  uploadPoliceCertificateDriver,
  postProductMerchant,
  putProductMerchant,
  deleteProductMerchant,
  getPhotoDriver,
  getIdentityDriver,
  getLicenseDriver,
  getPoliceCertificateDriver,
}

export default apis