import axios from 'axios';
import StaticVar from '../Config/StaticVar';

// ===> api create 
const api = axios.create({
  baseURL: StaticVar.URL_API,
  // timeout: 10000,
  headers:{}
});

// ===> api list function request

const getDataSpkmMasukRequest = (id) => api.get(`/spkm/masuk${id? "?userid=" + id : ""}`);
const getDataSpkmKeluarRequest = (id) => api.get(`/spkm/keluar${id? "?userid=" + id : ""}`);

const getDataSpkmDetailMasukRequest = (id) => api.get('/spkm/masuk/'+id);
const getDataSpkmDetailKeluarRequest = (id) => api.get('/spkm/keluar/'+id);

const getReportSpkmMasukRequest = (id) => api.get('/spkm/report/masuk/'+id);
const getReportSpkmKeluarRequest = (id) => api.get('/spkm/report/keluar/'+id);

const updateSubmissionApproveMasukRequest = (query,data) => api.post(`/approve/masuk?_id=${query._id}&notiftoken=${query.notiftoken}&check=${query.check}`,data);
const updateSubmissionApproveKeluarRequest = (query,data) => api.post(`/approve/keluar?_id=${query._id}&notiftoken=${query.notiftoken}&check=${query.check}`,data);

export const apis = {
  getDataSpkmMasukRequest,
  getDataSpkmKeluarRequest,
  getDataSpkmDetailMasukRequest,
  getDataSpkmDetailKeluarRequest,
  getReportSpkmMasukRequest,
  getReportSpkmKeluarRequest,
  updateSubmissionApproveMasukRequest,
  updateSubmissionApproveKeluarRequest
}

export default apis