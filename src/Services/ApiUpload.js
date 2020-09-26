import axios from 'axios';
import StaticVar from '../Config/StaticVar';

// ===> api create 
const api = axios.create({
  baseURL: StaticVar.URL_API,
  // timeout: 10000,
  headers:{},
  responseType:"blob"
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

const uploadPhotoDriver = (data) => api.post('/driver/profile/uploadphoto',data);
const uploadIdentityDriver = (data) => api.post('/driver/profile/uploadidentitycard',data);
const uploadLicenseDriver = (data) => api.post('/driver/profile/uploadlicensedriving',data);
const uploadPoliceCertificateDriver = (data) => api.post('/driver/profile/uploadpolicecertificate',data);

const getPhotoDriver = (data) => api.get('/driver/repo/photo/'+data);
const getIdentityDriver = (data) => api.get('/driver/repo/identitycard/'+data);
const getLicenseDriver = (data) => api.get('/driver/repo/licensedriving/'+data);
const getPoliceCertificateDriver = (data) => api.get('/driver/repo/policecertificate/'+data);

export const apis = {
  uploadPhotoDriver,
  uploadIdentityDriver,
  uploadLicenseDriver,
  uploadPoliceCertificateDriver,
  getPhotoDriver,
  getIdentityDriver,
  getLicenseDriver,
  getPoliceCertificateDriver,
}

export default apis